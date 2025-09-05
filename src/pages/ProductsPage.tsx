import React, { useState } from 'react'
import FilterLine from '../components/ProductsPage/FilterLine'
import ProductsList from '../components/ProductsPage/ProductsList'
import Breadcrumb from '../components/Breadcrumb'
import BrandsFilter from '../components/ProductsPage/BrandsFilter'
import { useBrands } from '../hooks/useBrands'

const ProductsPage = () => {
  const {brands} = useBrands()

  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  return (
    <div className=''>
      <div className="hidden lg:block lg:w-19/20 lg:mx-auto lg:px-40 lg:py-10">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/home" },
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
