import React from 'react'
import heartIcon from '../../assets/images/header/heart-icon.png'
import phoneImage from '../../assets/images/productsPage/phone-example.png'


const ProductCard = () => {
  return (
    <div className='bg-f6 w-41 h-88 py-5 rounded-[9px] flex flex-col items-center justify-around lg:w-56'>
        <div className=' w-35 flex justify-end'>
            <img src={heartIcon} alt="heart-icon" className='opacity-30 w-8'/>
        </div>
        <div className='w-26 lg:w-28'>
            <img src={phoneImage} alt="phone-example-image" />
        </div>
        <div className='w-35 text-center flex flex-col gap-4 lg:w-45 items-center'>
            <div>
                <p className='font-bold text-black text-center line-clamp-2'>Apple iPhone 14 Pro 512GB Gold &#40;MQ233&#41;</p>
            </div>
            <span className='block font-bold text-2xl'>$1437</span>

            <button className='text-white text-sm w-35 h-12 bg-black rounded-[8px]'>Buy Now</button>
        </div>
    </div>
  )
}

export default ProductCard