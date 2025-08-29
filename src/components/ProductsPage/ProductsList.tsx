import React from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'

const ProductsList = () => {
  return (
    <div
    className=' w-86 m-auto h-auto'
    >
        <ProductsResult/>
        <div className=' w-full h-auto flex gap-3 mt-5 flex-wrap'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </div>
  )
}

export default ProductsList