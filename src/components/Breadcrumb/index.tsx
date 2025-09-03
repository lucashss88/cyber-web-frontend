import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb';
import ProductDetailsContainer from '../../components/productDetailsPage/mainInfo/ProductDetailsContainer';
import ReviewsSection from '../../components/productDetailsPage/Reviews/ReviewsSection';
import RelatedProducts from '../../components/productDetailsPage/relatedProducts/RelatedProducts';

type ProductsData = {
  id: number;
  name: string;
  brand: string;
  category: {
    id: number;
    name: string;
  };
};

export default function ProductDetailsPage() {

  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!productId) {
      setLoading(false);
      setError("ID do produto não encontrado.");
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/products/${productId}`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Falha ao buscar os dados do produto: ${errorText}`);
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const generateCrumbs = () => {
    const baseCrumbs = [
      { label: "Home", href: "/" },
      { label: "Catalog", href: "/shop" },
    ];

    if (product) {
      return [
        ...baseCrumbs,
        { label: product.category.name, href: `/shop/category/${product.category.name}` },
        { label: product.brand, href: `/shop/brand/${product.brand}` },
        { label: product.name },
      ];
    }

    return baseCrumbs;
  }

  if (loading) {
    return <div>Carregando informações do produto...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erro: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 px-45">
      <Breadcrumb crumbs={generateCrumbs()} />


      {productId ? (
        <>
          
          <ProductDetailsContainer />
          
      
          <ReviewsSection productId={parseInt(productId, 10)} />
          
        
          <RelatedProducts />
        </>
      ) : (
        
        <div>Carregando informações do produto...</div>
      )}
    </div>
  );
}
