import {useState} from 'react'

const ProductsResult = () => {
  const [productCount, setProductCount] = useState<number>(0);
  

  return (
    <div className='w-full text-6c text-lg md:text-2xl flex justify-start items-center gap-1'>
        <p className='lg:hidden'>Products Result :</p>
        <p className='hidden lg:block'>Selected Products: </p>
        <span className='font-bold text-black text-xl md:text-2xl'>{productCount}</span>
        
    </div>
  )
}

export default ProductsResult