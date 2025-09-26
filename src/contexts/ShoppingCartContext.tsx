import { createContext, useState, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import type { ShoppingCart, CartItem, Product } from '../types/cart'
import { makeAuthenticatedRequest } from '../services/api'
import { useAuth } from '../hooks/useAuth'

export type LocalProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  url_image: string;
  code: string;
}

interface ShoppingCartContextType {
  cart: ShoppingCart | null
  items: CartItem[]
  loading: boolean
  error: string | null
  totalValue: number
  localProducts: LocalProduct[]
  subTotalPrice: number
  totalPrice: number
  estimatedTax: number
  estimatedShipping: number
  addProducts: (products: Product[]) => Promise<void>
  finalizeCart: (status: string) => Promise<void>
  clearError: () => void
  handleRemoveFromCart: (productId: string) => void
  handleQuantityPlus: (productId: string) => void
  handleQuantityMinus: (productId: string) => void
  setToastMessage: (message: string | null) => void
  toastMessage: string | null
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined)

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ShoppingCart | null>(null)
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [totalValue, setTotalValue] = useState(0)
  const [localProducts, setLocalProducts] = useState<LocalProduct[]>([])
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const { getAuthToken } = useAuth()
  
  const estimatedTax = 50
  const estimatedShipping = 29

  useEffect(() => {
    const storedCart = localStorage.getItem('shoppingCart')
    if (storedCart) {
      const parsed = JSON.parse(storedCart)
      setLocalProducts(Array.isArray(parsed) ? parsed : [parsed])
    }
  }, [])

  const subTotalPrice = useMemo(() => {
    return localProducts.reduce((total: number, product: LocalProduct) => total + (product.price * product.quantity), 0)
  }, [localProducts])

  const totalPrice = useMemo(() => {
    return subTotalPrice + estimatedTax + estimatedShipping
  }, [subTotalPrice])

  const handleRemoveFromCart = (productId: string) => {
    const updatedCart = localProducts.filter(product => product.id !== productId)
    setLocalProducts(updatedCart)
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart))
    setToastMessage('Produto removido do carrinho!')
  }

  const handleQuantityPlus = (productId: string) => {
    const updatedCart = localProducts.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })
    setLocalProducts(updatedCart)
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart))
    setToastMessage('Quantidade atualizada!')
  }

  const handleQuantityMinus = (productId: string) => {
    const product = localProducts.find(p => p.id === productId)
    if (product && product.quantity === 1) {
      handleRemoveFromCart(productId)
      return
    }
    const updatedCart = localProducts.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity - 1 }
      }
      return product
    })
    setLocalProducts(updatedCart)
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart))
    setToastMessage('Quantidade atualizada!')
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
      setCart(data)
      setItems(data.items)
    } catch (error){
      setError('Erro ao adicionar produtos ao carrinho: ' + error)
    } finally {
      setLoading(false)
    }
  }

  const finalizeCart = async (status: string, shoppingCartId: number = cart!.id) => {
    setLoading(true)
    setError(null)
    try {
      const token = await getAuthToken()
      if (!token) throw new Error('Token não encontrado')
      await makeAuthenticatedRequest(`http://localhost:3001/api/shopping_carts/${shoppingCartId}`, token, 'PATCH', status)
    } catch (error){
      setError('Erro ao finalizar o carrinho: ' + error)
    } finally {
      setLoading(false)
      setCart(null)
      setItems([])
      setTotalValue(0)
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
      localProducts,
      subTotalPrice,
      totalPrice,
      estimatedTax,
      estimatedShipping,
      addProducts,
      finalizeCart,
      clearError,
      handleRemoveFromCart,
      handleQuantityPlus,
      handleQuantityMinus,
      setToastMessage,
      toastMessage
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

