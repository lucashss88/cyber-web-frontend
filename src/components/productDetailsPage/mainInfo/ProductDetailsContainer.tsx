import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Breadcrumb from '../../Breadcrumb';
import ProductGallery from './ProductGallery';
import ProductTitle from './ProductTitle';
import ProductOptions from './ProductOptions';
import ProductSpecs from './ProductSpecs';
import ProductActions from './ProductActions';
import ProductDescription from './ProductDescription';
import ProductDeliveryInfo from './ProductDeliveryInfo';
import NotificationToast from './NotificationToast';
import { useShoppingCart } from '../../../hooks/useShoppingCart';

interface ProductData {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: string;
  discounted_price: string | null;
  stock: number;
  url_image: string;
  category: { name: string };
  colors: { name: string; hex_code: string }[];
  storage_options: { size: string }[];
  smartphone_spec: { screen_size?: string; cpu?: string; total_cores?: string; main_camera?: string; front_camera?: string; battery?: string; } | null;
}

const ProductDetailsContainer = () => {
  const { productId } = useParams<{ productId: string }>();
  const { localProducts, setToastMessage: setContextToastMessage } = useShoppingCart();

  const [product, setProduct] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);

  
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;
    const fetchProductDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Falha ao buscar os dados do produto: ${errorText}`);
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (err) {
        setError((err as Error).message);
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

  const generateCrumbs = () => {
    const categoryName = product.category?.name || 'Categoria';
    return [
      { label: "Home", href: "/home" },
      { label: "Shop", href: "/products_page" },
      { label: categoryName, href: `/products_page/${categoryName}` },

      { label: product.brand, href: `/products_page?brands=${encodeURIComponent(product.brand)}`},

      { label: product.name },
    ];
  };

  const memoryOptions = product.storage_options?.map(option => option.size) ?? [];
  const hasMemoryOptions = memoryOptions.length > 0;

  let isSelectionComplete = false; 
  if (hasMemoryOptions) {
    isSelectionComplete = !!selectedColor && !!selectedMemory;
  } else {
    isSelectionComplete = !!selectedColor;
  }

  function handleAddToCart(product: ProductData): void {
    if (!product) return;
    
    const existingProduct = localProducts.find(p => p.id === product.id.toString());
    
    let updatedCart;
    if (existingProduct) {
      updatedCart = localProducts.map(p => 
        p.id === product.id.toString() 
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
    } else {
      updatedCart = [...localProducts, {
        id: product.id.toString(),
        name: product.name,
        price: parseFloat(product.price),
        quantity: 1,
        url_image: product.url_image,
        code: product.id.toString(),
      }];
    }
    
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    setToastMessage('Produto adicionado ao carrinho!');
    setContextToastMessage('Produto adicionado ao carrinho!');
    
    window.dispatchEvent(new Event('storage'));
  }

  return (
    <>
      <Breadcrumb crumbs={generateCrumbs()} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <ProductGallery imageUrl={product.url_image} />
        <div className="flex flex-col">
          <ProductTitle 
            name={product.name}
            price={parseFloat(product.price)}
            originalPrice={product.discounted_price ? parseFloat(product.price) : null}
            discountedPrice={product.discounted_price ? parseFloat(product.discounted_price) : parseFloat(product.price)}
          />
          <ProductOptions
            colors={product.colors ?? []}
            memory={memoryOptions}
            selectedColor={selectedColor}
            selectedMemory={selectedMemory}
            onColorSelect={setSelectedColor}
            onMemorySelect={setSelectedMemory}
          />
          {product.smartphone_spec && <ProductSpecs specs={product.smartphone_spec || {}} />}
          <ProductDescription description={product.description} />
          <div className="flex-grow" />
          <ProductActions
            isDisabled={!isSelectionComplete}
            onAddToCart={() => handleAddToCart(product)}
            onAddToWishlist={() => setToastMessage('Added to Wishlist!')}
          />
          <ProductDeliveryInfo />
        </div>
      </div>

     
      {toastMessage && (
        <NotificationToast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}
    </>
  );
};

export default ProductDetailsContainer;