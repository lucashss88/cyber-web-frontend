import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext)
  if (!context) {
    throw new Error('useShoppingCart must be used within ShoppingCartProvider')
  }
  return context
}