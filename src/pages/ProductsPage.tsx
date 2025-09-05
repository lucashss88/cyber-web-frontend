import React, {useEffect, useState} from 'react'
import FilterLine from '../components/ProductsPage/FilterLine'
import ProductsList from '../components/ProductsPage/ProductsList'
import Breadcrumb from '../components/Breadcrumb'
import BrandsFilter from '../components/ProductsPage/BrandsFilter'
import { useBrands } from '../hooks/useBrands'
import {useParams} from "react-router-dom";

const ProductsPage = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const { categoryName } = useParams<{ categoryName: string }>();
  const {brands} = useBrands(categoryName)

  useEffect(() => {
    setSelectedBrands([]);
  }, [categoryName]);

  return (
    <div className=''>
      <div className="hidden lg:block lg:w-19/20 lg:mx-auto lg:px-40 lg:py-10">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/home" },
            { label: "Catalog", href: "/" },
            { label: categoryName || 'All Products', href: `/products_page/${categoryName || ''}` },
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
          <ProductsList
            categoryName={categoryName}
            selectedBrands={selectedBrands}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
