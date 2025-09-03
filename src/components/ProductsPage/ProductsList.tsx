import {useState} from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'
import Pagination from './Pagination'

const ProductsList = () => {
  const [page, setPage] = useState(1)

  return (
    <div
    className=' w-19/20 m-auto h-auto flex flex-col items-center'
    >
        <ProductsResult/>
        <div className='w-full h-auto flex justify-center gap-4 mt-5 flex-wrap bg-yellow-100 lg:w-15/20 lg:grid lg:grid-cols-3 lg:gap-5 lg:justify-items-center'>
          <ProductCard/>
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