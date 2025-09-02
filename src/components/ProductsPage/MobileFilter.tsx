import {useState} from 'react'
import leftArrowFilter from '../../assets/images/productsPage/leftArrowFilter.png'
import arrowToggle from '../../assets/images/productsPage/arrowToggle.png'
import type {MobileFilterProps} from '../../types/mobileFilterProps'
import RangeSlider from './RangeSlider'
import magnifier from '../../assets/images/productsPage/magnifier.png'

const MobileFilter = ({onClose}: MobileFilterProps) => {
  const [showPrice, setShowPrice] = useState<boolean>(true)
  const [showBrand, setShowBrand] = useState<boolean>(true)
  const [query, setQuery] = useState<string>('')

  //example of brands
  const brands =[
    {name: 'Apple', count: 148},
    {name: 'Samsung', count: 120},
    {name: 'Motorola', count: 90},
    {name: 'Xiaomi', count: 80},
    {name: 'POCO', count: 50},
    {name: 'Nokia', count: 30},
    {name: 'Honor', count: 20},
    {name: 'Motorola', count: 10},
    {name: 'Realme', count: 70},
    {name: 'Asus', count: 40},
    {name: 'Sony', count: 25}
  ]

  const filteredBrands = brands.filter(b => b.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className='bg-white w-dvw h-dvh z-10 absolute top-0 flex flex-col items-center'>
      <div className='w-86 bg-white flex items-center gap-4 my-8'>
        <img src={leftArrowFilter} alt="left-arrow" className='w-3 cursor-pointer' onClick={onClose}/>
        <h2 className='font-medium text-2xl'>Filters</h2>
      </div>

      <div id='filter-elements' className="bg-white w-86">
          <div className="w-full flex justify-between items-center border-b border-b-b5 mb-6" onClick={()=> setShowPrice(p => !p)}>
            <h3 className='font-medium text-lg'>Price</h3>
            <img 
            src={arrowToggle} 
            alt="arrow-price" 
            className={`w-4 ${showPrice ? 'rotate-180' : 'rotate-0'} transition-all delay-50`}/>

          </div>

          <div className="mb-6 w-full h-auto">
            {showPrice && <RangeSlider min={1000} max={6000} step={1} />}
          </div>

          <div className="w-full flex justify-between items-center border-b border-b-b5 mb-6" onClick={()=> setShowBrand(b => !b)}>
            <h3 className='font-medium text-lg'>Brand</h3>
            <img src={arrowToggle} alt="arrow-brand" className={`w-4 ${showBrand ? 'rotate-180' : 'rotate-0'} transition-all delay-50`}/>

          </div>

          { showBrand && (
            <>
              <div className='bg-f5 w-full rounded-[8px] h-10 flex items-center px-4'>
                  <img src={magnifier} alt="magnifier" className='w-5'/>
                  <input type="text" className='outline-none flex-1 rounded-[8px] placeholder:text-sm placeholder-65 placeholder:font-medium px-3' placeholder='Search' value={query} onChange={(e)=> setQuery(e.target.value)}/>
              </div>

              <div className='mt-4 h-60 overflow-y-scroll scrollbar-custom'>
                {filteredBrands.map((brand)=>(
                  <label key={brand.name} className="flex items-center gap-2 mb-2">
                    <input type="checkbox" className='w-4 h-4 gap-2 mb-2 checked:bg-black'/>
                    <span className="text-sm text-black font-medium">{brand.name}</span>
                    <span className="text-92 text-xs">{brand.count}</span>
                  </label>
                ))}
              </div>
            </>
          )}
           
      </div>

      <button className='bg-black text-white flex items-center justify-center w-86 my-8 py-3 px-16 rounded-[8px]'>Apply</button>
    </div>
  )
}

export default MobileFilter