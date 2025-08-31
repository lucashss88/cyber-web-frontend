import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb"; 
import ProductGallery from "../../components/productDetailsPage/ProductGallery";
import ProductTitle from "../../components/productDetailsPage/ProductTitle";
import ProductOptions from "../../components/productDetailsPage/ProductOptions";
import ProductActions from "../../components/productDetailsPage/ProductActions";
import ProductDescription from "../../components/productDetailsPage/ProductDescription";

export default function ProductDetailsPage() {
  const { productId } = useParams<{ productId?: string }>();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Smartphones", href: "/shop/smartphones" },
    { label: `Product ${productId}`, href: `/products/${productId}` },
  ];

  return (
    <div className="p-8">
     
      <Breadcrumb crumbs={crumbs} />

      
      <div className="grid grid-cols-2 gap-8 mt-6">
       
        <ProductGallery />

        
        <div>
          <ProductTitle />
          <ProductOptions />
          <ProductActions />
          <ProductDescription />
        </div>
      </div>
    </div>
  );
}
