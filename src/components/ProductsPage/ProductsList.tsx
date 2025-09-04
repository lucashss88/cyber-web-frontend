import { useState } from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'
import Pagination from './Pagination'
import ByPrice from './ByPrice'
import type { SortOption } from '../../types/byPrice'
import { useProducts } from '../../hooks/useProducts'

const ProductsList = () => {
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState<SortOption>("highToLow")

  const { products, totalPages, loading, error } = useProducts(page, order)

  return (
    <div className="w-19/20 lg:w-full m-auto h-auto flex flex-col items-center">
      <div className="lg:flex lg:w-full lg:justify-between">
        <ProductsResult />
        <ByPrice order={order} setOrder={setOrder} />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full h-auto flex justify-center gap-4 mt-5 flex-wrap lg:w-full lg:grid lg:grid-cols-3 lg:gap-4 lg:justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.url_image}
          />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export default ProductsList
