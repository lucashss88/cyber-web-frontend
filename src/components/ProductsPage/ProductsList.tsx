import React from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'

const ProductsList = () => {
  return (
    <div
    className=' w-86 m-auto h-auto'
    >
        <ProductsResult/>
        <div className='bg-red-500 w-full h-auto'>
          <ProductCard/>
          teste
        </div>
    </div>
  )
}

export default ProductsList