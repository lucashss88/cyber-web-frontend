import { useParams } from 'react-router-dom';
// import Breadcrumb from '../../components/Breadcrumb';
import ProductDetailsContainer from '../../components/productDetailsPage/mainInfo/ProductDetailsContainer';
import ReviewsSection from '../../components/productDetailsPage/Reviews/ReviewsSection';
import RelatedProducts from '../../components/productDetailsPage/relatedProducts/RelatedProducts';

export default function ProductDetailsPage() {

  const { productId } = useParams<{ productId: string }>();

 
  // const crumbs = [
  //   { label: "Home", href: "/" },
  //   { label: "Shop", href: "/shop" },
  //   { label: "Smartphones", href: "/shop/smartphones" },
  //   { label: "Apple", href: "/" },
  //   { label: "iPhone 14 Pro Max", href: "/" },
  // ];

  return (
    <div className="container mx-auto p-4">
      


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