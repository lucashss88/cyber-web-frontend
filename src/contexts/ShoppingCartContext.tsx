import { createContext, useState, useEffect, useMemo, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { ShoppingCartResponse, CartItem, Product } from '../types/cart'
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
  cart: ShoppingCartResponse | null
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
  deleteProduct: (productId: number, shoppingCartId: number) => Promise<void>
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
  const [cart, setCart] = useState<ShoppingCartResponse | null>(null)
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [totalValue, setTotalValue] = useState(0)
  const [localProducts, setLocalProducts] = useState<LocalProduct[]>([])
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const { getAuthToken, userId } = useAuth()
  
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

  const handleRemoveFromCart = async (productId: string) => {
    const updatedCart = localProducts.filter(product => product.id !== productId)
    setLocalProducts(updatedCart)
    if (cart?.shopping_cart_id) {
      await deleteProduct(parseInt(productId), cart.shopping_cart_id)
    } else {
      console.error('Carrinho não encontrado ao tentar remover o produto.')
    }
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
    window.location.reload()
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
    window.location.reload()
  }
  
  const addProducts = useCallback(async (products: Product[]) => {
    setLoading(true)
    setError(null)
    try {
      const token = await getAuthToken()
      if (!token) throw new Error('Token não encontrado')
      
      if (!userId) throw new Error('Usuário não autenticado')
      
      const response = await makeAuthenticatedRequest(
        'http://localhost:3001/api/shopping_carts', 
        token, 
        'POST', 
        JSON.stringify({ products, userId: userId })
      )
      
      const data = await response.json()
      setTotalValue(data.valor_total)
      setCart(data)
      setItems(data.items)
      console.log("A função de adicionar foi chamada.", data)
    } catch (error){
      setError('Erro ao adicionar produtos ao carrinho: ' + error)
    } finally {
      setLoading(false)
    }
  }, [getAuthToken, userId])

  const deleteProduct = useCallback(async (productId: number, shoppingCartId: number) => {
    setLoading(true)
    setError(null)
    try {
      const token = await getAuthToken()
      if (!token) throw new Error('Token não encontrado')

      if (!userId) throw new Error('Usuário não autenticado')

      const response = await makeAuthenticatedRequest(
        `http://localhost:3001/api/shopping_carts/${shoppingCartId}/${productId}`,
        token,
        'DELETE',
      )

      const data = await response.json()
      setTotalValue(data.valor_total)
      setCart(data)
      setItems(data.items)
      console.log("A função de deletar foi chamada.", data)
    } catch (error){
      setError('Erro ao adicionar produtos ao carrinho: ' + error)
    } finally {
      setLoading(false)
    }
  }, [getAuthToken, userId])

  const finalizeCart = async (status: string, shoppingCartId: number = cart!.shopping_cart_id) => {
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
      deleteProduct,
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

