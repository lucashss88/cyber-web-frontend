import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'
import Pagination from './Pagination'
import ByPrice from './ByPrice'
import type { SortOption } from '../../types/byPrice'

interface Product{
  id: number
  name: string
  price: number
  url_image: string
}

const ProductsList = () => {
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState<SortOption>("highToLow")
  const url = import.meta.env.VITE_API_URL
  const [products, setProducts] = useState<Product[]>([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(()=>{
    async function fetchProducts(){
      try{
        const response = await fetch(`${url}/api/products?page=${page}&order=${order}`)
        const data = await response.json()
        const productsData = data.data
        console.log("API response:", data)
        console.log("Fetched products:", productsData)

        setProducts(productsData)
        setTotalPages(data.metadata.total_pages)
        console.log("Products state updated:", products)


      } catch(e){
        console.error("Error fetching products: ", e)
      }
    }
    fetchProducts()
  }, [url, page, order])

  return (
    <div className="w-19/20 lg:w-full m-auto h-auto flex flex-col items-center">
      <div className=" lg:flex lg:w-full lg:justify-between">
        <ProductsResult />

        <ByPrice order={order} setOrder={setOrder} />
      </div>

      <div className="w-full h-auto flex justify-center gap-4 mt-5 flex-wrap  lg:w-full lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.url_image}
          />
        ))}
        
      </div>

      <Pagination currentPage={page} totalPages={12} onPageChange={setPage} />
    </div>
  )
}

export default ProductsList
