import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetailsContainer from '../../components/productDetailsPage/ProductDetailsContainer';

export default function ProductDetailsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Smartphones", href: "/shop/smartphones" },
    { label: "Apple", href: "/" },
    { label: "iPhone 14 Pro Max", href: "/" },
  ];

  return (
    <div className="p-1">
      <Breadcrumb crumbs={crumbs} />
      <ProductDetailsContainer />
    </div>
  );
}