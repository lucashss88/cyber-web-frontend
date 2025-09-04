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
  totalProducts: number
  totalPages: number
  loading: boolean  
  error: string | null 
}

export function useProducts(page: number, order: SortOption): UseProductsResult {
 const url = import.meta.env.VITE_API_URL
 const [products, setProducts] = useState<Product[]>([])
 const [totalProducts, setTotalProducts] = useState<number>(0)
 const [totalPages, setTotalPages] = useState(1)
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState<string | null>(null)  
 
 useEffect(() => {
   async function fetchProducts() {      setLoading(true)
     setError(null)     
     try {
        const backendOrder = order === 'highToLow' ? 'desc' : 'asc';
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products?page=${page}&order=${backendOrder}`);

        if (!response.ok) {
         throw new Error(`O servidor respondeu com o status:${response.status}`);
        }
        const data = await response.json();
        setTotalPages(data.metadata.total_pages);
        setTotalProducts(data.metadata.total_items);
        setProducts(data.data);      
      } catch (e) {
          setError("Error fetching products")
          console.error("Error fetching products: ", e)      
        } finally {
          setLoading(false)      
        }    
    }    
    
    fetchProducts()
 }, [url, page, order])  
 
return { products, totalPages, loading, error, totalProducts } }