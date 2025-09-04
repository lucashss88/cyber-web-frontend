import { useState } from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'
import Pagination from './Pagination'
import ByPrice from './ByPrice'
import type { SortOption } from '../../types/byPrice'

const ProductsList = () => {
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState<SortOption>("highToLow")

  return (
    <div className="w-19/20 lg:w-full m-auto h-auto flex flex-col items-center">
      <div className=" lg:flex lg:w-full lg:justify-between">
        <ProductsResult />

        <ByPrice order={order} setOrder={setOrder} />
      </div>

      <div className="w-full h-auto flex justify-center gap-4 mt-5 flex-wrap  lg:w-full lg:grid lg:grid-cols-3 lg:gap-15 xl:gap-x-65 2xl:gap-x-10 xl:gap-y-5 lg:justify-items-center">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Pagination currentPage={page} totalPages={12} onPageChange={setPage} />
    </div>
  )
}

export default ProductsList
