import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetailsContainer from '../../components/productDetailsPage/mainInfo/ProductDetailsContainer';
import ReviewsSection from '../../components/productDetailsPage/Reviews/ReviewsSection';
import RelatedProducts from '../../components/productDetailsPage/relatedProducts/RelatedProducts';

export default function ProductDetailsPage() {
  const crumbs = [
    { label: "Home", href: "/homepage" },
    { label: "Shop", href: "/products_page" },
    { label: "Smartphones", href: "/" },
    { label: "Apple", href: "/" },
    { label: "iPhone 14 Pro Max", href: "/" },
  ];

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb crumbs={crumbs} />
      <ProductDetailsContainer />
      <ReviewsSection />
      <RelatedProducts />
    </div>
  );
}