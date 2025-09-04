import React, { useState } from 'react'
import FilterLine from '../components/ProductsPage/FilterLine'
import ProductsList from '../components/ProductsPage/ProductsList'
import Breadcrumb from '../components/Breadcrumb'
import BrandsFilter from '../components/ProductsPage/BrandsFilter'

const ProductsPage = () => {
  const brands = [
    { name: "Apple", count: 148 },
    { name: "Samsung", count: 120 },
    { name: "Motorola", count: 90 },
    { name: "Xiaomi", count: 80 },
    { name: "POCO", count: 50 },
    { name: "Nokia", count: 30 },
    { name: "Honor", count: 20 },
    { name: "Realme", count: 70 },
    { name: "Asus", count: 40 },
    { name: "Sony", count: 25 },
  ]

  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  return (
    <div className=''>
      <div className=" lg:w-19/20 lg:mx-auto lg:px-40 lg:py-10">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Catalog", href: "/" },
            { label: "Smartphones", href: "/products_page" },
          ]}
        />
      </div>

      <div className=' lg:flex lg:w-17/22 lg:m-auto lg:relative lg:gap-8 xl:gap-35'>
        <div className=" hidden lg:flex lg:flex-col lg:flex-1 ">
          <BrandsFilter
            brands={brands}
            selectedBrands={selectedBrands}
            onChange={setSelectedBrands}
          />
        </div>
        <FilterLine />
        <div className=' lg:flex-5'>
          <ProductsList />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
