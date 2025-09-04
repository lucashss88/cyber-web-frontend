import heartIcon from '../../assets/images/header/heart-icon.png'

interface ProductCardProps {
  name: string
  price: number
  imageUrl: string
}

const ProductCard = ({ name, price, imageUrl }: ProductCardProps) => {
  return (
    <div className="bg-f6 w-41 h-88 py-5 rounded-[9px] flex flex-col items-center justify-around lg:w-56 lg:min-h-88">
      <div className="w-35 flex justify-end">
        <img src={heartIcon} alt="heart-icon" className="opacity-30 w-8" />
      </div>
      <div className="w-26 lg:w-28 flex justify-center">
        <img src={imageUrl} alt={name} className="object-contain lg:w-23 lg:max-h-25" />
      </div>
      <div className="w-35 text-center flex flex-col gap-4 lg:w-full  items-center">
        <div className=" lg:h-6">
          <p className="font-bold text-black text-center line-clamp-2">
            {name}
          </p>
        </div>
        <span className="block font-bold text-2xl lg:mt-3">${price}</span>

        <button className="text-white text-sm w-35 h-12 bg-black rounded-[8px]">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default ProductCard
