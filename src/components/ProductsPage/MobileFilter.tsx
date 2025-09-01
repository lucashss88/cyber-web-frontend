import React from 'react'
import leftArrowFilter from '../../assets/images/productsPage/leftArrowFilter.png'
import arrowToggle from '../../assets/images/productsPage/arrowToggle.png'
import type {MobileFilterProps} from '../../types/mobileFilterProps'
import RangeSlider from './RangeSlider'

const MobileFilter = ({onClose}: MobileFilterProps) => {

  return (
    <div className='bg-white w-dvw h-dvh z-10 absolute top-0 flex flex-col items-center'>
      <div className='w-86 bg-white flex items-center gap-4 my-8'>
        <img src={leftArrowFilter} alt="left-arrow" className='w-3 cursor-pointer' onClick={onClose}/>
        <h2 className='font-medium text-2xl'>Filters</h2>
      </div>

      <div id='filter-elements' className="bg-white w-86">
          <div className="w-full flex justify-between items-center">
            <h3 className='font-medium text-lg'>Price</h3>
            <img src={arrowToggle} alt="arrow-price" className='w-4'/>

          </div>

          <div>
            <RangeSlider min={1000} max={6000} step={1} />
          </div>
      </div>
    </div>
  )
}

export default MobileFilter