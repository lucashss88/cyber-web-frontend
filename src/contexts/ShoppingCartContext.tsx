import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { ShoppingCart, CartItem, Product } from '../types/cart'
import { makeAuthenticatedRequest } from '../services/api'
import { useAuth } from '../hooks/useAuth'

interface ShoppingCartContextType {
  cart: ShoppingCart | null
  items: CartItem[]
  loading: boolean
  error: string | null
  totalValue: number
  addProducts: (products: Product[]) => Promise<void>
  finalizeCart: (status: string) => Promise<void>
  clearError: () => void
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined)

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShoppingCart | null>(null)
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [totalValue, setTotalValue] = useState(0)
  const { getAuthToken } = useAuth()

  if (getAuthToken() === null) {
    throw new Error('Token não encontrado')
  }
  
  const addProducts = async (products: Product[]) => {
    setLoading(true)
    setError(null)
    try {
      const token = await getAuthToken()
      if (!token) throw new Error('Token não encontrado')
      const response = await makeAuthenticatedRequest('http://localhost:3001/api/shopping_carts', token, 'POST', JSON.stringify({ products }))
      
      const data = await response.json()
      setTotalValue(data.valor_total)
    } catch (error){
      setError('Erro ao adicionar produtos ao carrinho: ' + error)
    } finally {
      setLoading(false)
    }
  }

  const finalizeCart = async (status: string) => {
    setLoading(true)
    setError(null)
    try {
      const token = await getAuthToken()
      if (!token) throw new Error('Token não encontrado')
      return await makeAuthenticatedRequest('', token, 'PATCH', status)
    } catch (error){
      setError('Erro ao finalizar o carrinho: ' + error)
    } finally {
      setLoading(false)
    }
  }

  const clearError = () => {
    setError(null)
  }

  return (
    <ShoppingCartContext.Provider value={{
      cart,
      items,
      loading,
      error,
      totalValue,
      addProducts,
      finalizeCart,
      clearError
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext)
  if (!context) {
    throw new Error('useShoppingCart must be used within ShoppingCartProvider')
  }
  return context
}