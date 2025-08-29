import React from 'react'
import ProductCard from './ProductCard'
import ProductsResult from './ProductsResult'

const ProductsList = () => {
  return (
    <div
    className=' w-86 m-auto h-auto'
    >
        <ProductCard/>
        <ProductsResult/>
    </div>
  )
}

export default ProductsList