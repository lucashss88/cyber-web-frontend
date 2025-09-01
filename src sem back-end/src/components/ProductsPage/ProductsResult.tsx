import {useState} from 'react'

const ProductsResult = () => {
    const [productCount, setProductCount] = useState<number>(0);

  return (
    <div className='w-full text-6c text-lg flex justify-start items-center gap-1'>
        <p>Products Result :</p>
        <span className='font-bold text-black text-xl '>{productCount}</span>
        
    </div>
  )
}

export default ProductsResult