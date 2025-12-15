import { useParams } from 'react-router-dom';
import ProductDetailsContainer from '../../components/productDetailsPage/mainInfo/ProductDetailsContainer';
import ReviewsSection from '../../components/productDetailsPage/Reviews/ReviewsSection';
import RelatedProducts from '../../components/productDetailsPage/relatedProducts/RelatedProducts';

export default function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="lg:w-17/22 lg:m-auto p-4">
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