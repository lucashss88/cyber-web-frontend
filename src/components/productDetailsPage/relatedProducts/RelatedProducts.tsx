

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard'; 

type RelatedProduct = {
  id: number;
  name: string;
  price: string;
  url_image: string;
};

const RelatedProducts = () => {
  const { productId } = useParams<{ productId: string }>();

  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
   
    if (!productId) return;

    const fetchBrandAndRelatedProducts = async () => {
      try {
        setIsLoading(true);

        
        const productResponse = await fetch(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        if (!productResponse.ok) {
          throw new Error('Falha ao buscar o produto principal para obter a marca.');
        }
        const productData = await productResponse.json();
        const brand = productData.data.brand;

        
        if (brand) {
         
          const relatedResponse = await fetch(`${import.meta.env.VITE_API_URL}/products/related/${brand}`);
          if (!relatedResponse.ok) {
            throw new Error('Falha ao buscar os produtos relacionados.');
          }
          const relatedData = await relatedResponse.json();
          
          
          const currentProductIdNumber = parseInt(productId, 10);
          const filteredProducts = relatedData.data.filter((product: RelatedProduct) => product.id !== currentProductIdNumber);
          setRelatedProducts(filteredProducts);
        }

      } catch (error) {
        console.error("Erro na seção de produtos relacionados:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrandAndRelatedProducts();
  }, [productId]); 

  if (isLoading) {
    return <div className="my-12 mt-42 mb-16">Carregando produtos relacionados...</div>;
  }

  
  if (relatedProducts.length === 0) {
    return null; 
  }

  return (
    <div className="my-12 mt-42 mb-16">
      <h2 className="text-3xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
         
          <ProductCard 
            key={product.id} 
            product={{
              id: product.id,
              imageUrl: product.url_image,
              name: product.name,
              price: parseFloat(product.price)
            }} 
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;