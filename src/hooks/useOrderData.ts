import { useContext } from 'react'
import { OrderDataContext } from '../contexts/OrderDataContext'

export function useOrderData() {
  const context = useContext(OrderDataContext)
  if (!context) {
    throw new Error('useOrderData must be used within OrderDataProvider')
  }
  return context
}