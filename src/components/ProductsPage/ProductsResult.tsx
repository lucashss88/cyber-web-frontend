import type { SortOption } from '../../types/byPrice'
import { useProducts } from '../../hooks/useProducts'

interface ProductsResultProps {
  order: SortOption
  page: number
}

const ProductsResult = ({order, page}: ProductsResultProps) => {
  
  const { totalProducts } = useProducts(page, order)
  

  return (
    <div className='w-full text-6c text-lg md:text-2xl flex justify-start items-center gap-1'>
        <p className='lg:hidden'>Products Result :</p>
        <p className='hidden lg:block'>Selected Products: </p>
        <span className='font-bold text-black text-xl md:text-2xl'>{totalProducts}</span>
        
    </div>
  )
}

export default ProductsResult