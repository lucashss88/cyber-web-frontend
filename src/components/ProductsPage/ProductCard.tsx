import heartIcon from '../../assets/images/header/heart-icon.png'
import {useNavigate} from "react-router-dom";

interface ProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
}

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
  const navigate = useNavigate();
  const handleProduct = async (id: number) => {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="bg-f6 w-41 h-88 py-5 rounded-[9px] flex flex-col items-center justify-around lg:w-45 xl:w-66 xl:h-108">
      <div className="w-35 flex justify-end">
        <img src={heartIcon} alt="heart-icon" className="opacity-30 w-8" />
      </div>
      <div className="w-26 lg:w-28 flex justify-center">
        <img src={imageUrl} alt={name} className="object-contain max-w-23 max-h-29 lg:w-23 lg:max-h-25" />
      </div>
      <div className="w-35 text-center flex flex-col gap-4 lg:w-full  items-center">
        <div className=" lg:h-6">
          <p className="font-bold text-black text-center line-clamp-2">
            {name}
          </p>
        </div>
        <span className="block font-bold text-2xl lg:mt-3">${price}</span>

        <button onClick={() => handleProduct(id)} className="text-white text-sm w-35 h-12 bg-black rounded-[8px]">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductCard
