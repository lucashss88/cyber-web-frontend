import React from 'react';
import { FaRegHeart } from 'react-icons/fa'; 
import {useNavigate} from "react-router-dom";

type Props = {
    product: {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
  }
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const handleProduct = async (id: number) => {
    navigate(`/product/${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <div className="w-full flex justify-end">
        <button className="text-gray-400 hover:text-red-500">
          <FaRegHeart size={22} />
        </button>
      </div>
      <div className="w-40 h-40 flex items-center justify-center my-4">
        <img src={product.imageUrl} alt={product.name} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="flex-grow flex flex-col justify-between w-full">
        <p className="font-bold text-black line-clamp-2 h-12">{product.name}</p>
        <div className='mt-4'>
          <span className="block font-bold text-2xl">${product.price}</span>
          <button onClick={() => handleProduct(product.id)} className="mt-4 text-white text-sm w-full py-3 bg-black rounded-lg hover:bg-gray-800 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;