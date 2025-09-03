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
    <div className='bg-green-400'>
      <div className="w-19/20 mx-auto px-40">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Catalog", href: "/" },
            { label: "Smartphones", href: "/products_page" },
          ]}
        />
      </div>

      <div className='flex bg-red-300 w-19/20 mx-auto px-40'>
        <div className=" my-6 hidden lg:flex">
          <BrandsFilter
            brands={brands}
            selectedBrands={selectedBrands}
            onChange={setSelectedBrands}
          />
        </div>
        <FilterLine />
        <div className='bg-blue-400 '>
          <ProductsList />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
