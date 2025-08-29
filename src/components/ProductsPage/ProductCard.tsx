import React from 'react'
import heartIcon from '../../assets/heart-icon.png'


const ProductCard = () => {
  return (
    <div className='bg-f6 w-41 h-88 rounded-[9px] flex flex-col items-center justify-around'>
        <div className=' w-35 flex justify-end'>
            <img src={heartIcon} alt="" className='opacity-30 w-8'/>
        </div>
        <div className='w-26 bg-green-400'>
            teste
        </div>
    </div>
  )
}

export default ProductCard