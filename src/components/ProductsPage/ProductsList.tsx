import ProductCard from './ProductCard'
import Pagination from './Pagination'

interface Product {
  id: number;
  name: string;
  price: number;
  url_image: string;
}

interface ProductsListProps {
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ProductsList = ({products, totalPages, loading, error, currentPage, onPageChange}: ProductsListProps) => {

  return (
    <div className="w-19/20 lg:w-full m-auto h-auto flex flex-col items-center">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full h-auto flex justify-center gap-4 mt-5 flex-wrap  lg:w-full lg:grid lg:grid-cols-3 lg:gap-15 xl:gap-x-65 2xl:gap-x-10 xl:gap-y-5 lg:justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.url_image}
          />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  )
}

export default ProductsList
