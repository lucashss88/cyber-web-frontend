import {useState} from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'
import Pagination from './Pagination'

const ProductsList = () => {
  const [page, setPage] = useState(1)

  return (
    <div
    className=' w-86 m-auto h-auto flex flex-col items-center'
    >
        <ProductsResult/>
        <div className=' w-full h-auto flex gap-4 mt-5 flex-wrap'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>

        <Pagination currentPage={page} totalPages={12} onPageChange={setPage}/>
    </div>
  )
}

export default ProductsList