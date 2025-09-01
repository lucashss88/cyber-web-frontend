import React from 'react'
import leftArrowFilter from '../../assets/images/productsPage/leftArrowFilter.png'
import type {MobileFilterProps} from '../../types/mobileFilterProps'

const MobileFilter = ({onClose}: MobileFilterProps) => {

  return (
    <div className='bg-white w-dvw h-dvh z-10 absolute top-0 flex flex-col items-center'>
      <div className='w-86 bg-white flex items-center gap-4 my-8'>
        <img src={leftArrowFilter} alt="left-arrow" className='w-3 cursor-pointer' onClick={onClose}/>
        <h2 className='font-medium text-2xl'>Filters</h2>
      </div>

      <div id='filter-elements' class>

      </div>
    </div>
  )
}

export default MobileFilter