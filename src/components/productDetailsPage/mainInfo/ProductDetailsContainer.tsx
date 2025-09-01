import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import ProductTitle from './ProductTitle';
import ProductOptions from './ProductOptions';
import ProductSpecs from './ProductSpecs';
import ProductActions from './ProductActions';
import ProductDescription from './ProductDescription';
import ProductDeliveryInfo from './ProductDeliveryInfo';

interface ProductData {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: string;
  discounted_price: string | null;
  stock: number;
  url_image: string;
  colors: { name: string; hex: string }[];
  storageOptions: { size: string }[];
  smartphoneSpec: {
    screen_size: string;
    cpu: string;
    total_cores: string;
    main_camera: string;
    front_camera: string;
    battery: string;
  } | null;
}

const ProductDetailsContainer = () => {
  const { productId } = useParams<{ productId: string }>();

  const [product, setProduct] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/${productId}`);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar os dados do produto.');
        }

        const data = await response.json();
        setProduct(data.data); 

      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchProductDetails();
  }, [productId]); 

  if (isLoading) {
    return <div className="text-center mt-32">Carregando produto...</div>;
  }

  if (error) {
    return <div className="text-center mt-32 text-red-500">Erro: {error}</div>;
  }

  if (!product) {
    return <div className="text-center mt-32">Produto não encontrado.</div>;
  }

  const isSelectionComplete = !!selectedColor && !!selectedMemory;

  const memoryOptions = product.storageOptions.map(option => option.size);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
      <ProductGallery />
      <div className="flex flex-col">
        <ProductTitle 
          name={product.name}
          price={parseFloat(product.price)}
          originalPrice={product.discounted_price ? parseFloat(product.price) : null} 
          discountedPrice={product.discounted_price ? parseFloat(product.discounted_price) : parseFloat(product.price)}
        />
        <ProductOptions
          colors={product.colors}
          memory={memoryOptions} 
          selectedColor={selectedColor}
          selectedMemory={selectedMemory}
          onColorSelect={setSelectedColor}
          onMemorySelect={setSelectedMemory}
        />
        {product.smartphoneSpec && <ProductSpecs specs={product.smartphoneSpec} />}
        
        <ProductDescription description={product.description} />
        
        <div className="flex-grow" />
        <ProductActions
          isDisabled={!isSelectionComplete}
          onAddToCart={() => alert('Added to cart!')}
          onAddToWishlist={() => alert('Added to wishlist!')}
        />
        <ProductDeliveryInfo />
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
