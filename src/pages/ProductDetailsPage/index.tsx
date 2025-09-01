import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetailsContainer from '../../components/productDetailsPage/mainInfo/ProductDetailsContainer';
import ReviewsSection from '../../components/productDetailsPage/Reviews/ReviewsSection';
import RelatedProducts from '../../components/productDetailsPage/relatedProducts/RelatedProducts';

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
      <ReviewsSection />
      <RelatedProducts />
    </div>
  );
}