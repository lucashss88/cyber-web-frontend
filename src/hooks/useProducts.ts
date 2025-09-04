import { useState, useEffect } from 'react'
import type { SortOption } from '../types/byPrice'

interface Product {
  id: number
  name: string
  price: number
  url_image: string
}

interface UseProductsResult {
  products: Product[]
  totalPages: number
  loading: boolean
  error: string | null
}

export function useProducts(page: number, order: SortOption): UseProductsResult {
  const url = import.meta.env.VITE_API_URL
  const [products, setProducts] = useState<Product[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`${url}/api/products?page=${page}&order=${order}`)
        const data = await response.json()

        setProducts(data.data)
        setTotalPages(data.metadata.total_pages)
      } catch (e) {
        setError("Error fetching products")
        console.error("Error fetching products: ", e)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [url, page, order])

  return { products, totalPages, loading, error }
}
