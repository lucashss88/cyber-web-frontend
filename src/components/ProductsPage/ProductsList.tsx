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
      <div className="self-start lg:flex lg:w-full lg:justify-between">
        <ProductsResult order={order} page={page} />
        <div className="hidden lg:block">
          <ByPrice order={order} setOrder={setOrder} />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full h-auto flex justify-center gap-4 mt-5 flex-wrap  lg:w-full lg:grid lg:grid-cols-3 lg:gap-15 xl:gap-x-65 2xl:gap-x-10 xl:gap-y-5 lg:justify-items-center">
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
