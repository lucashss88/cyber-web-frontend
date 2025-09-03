import React from 'react'
import FilterLine from '../components/ProductsPage/FilterLine'
import ProductsList from '../components/ProductsPage/ProductsList'
import Breadcrumb from '../components/Breadcrumb'

const ProductsPage = () => {
  return (
    <>
        <div className='w-19/20 mx-auto px-40 '>
          <Breadcrumb crumbs={[{label: 'Home', href: '/'}, {label: 'Catalog', href: '/'}, {label: 'Smartphones', href: '/products_page'}]}/>
        </div>
        <FilterLine/>
        <ProductsList/>
    </>
  )
}

export default ProductsPage