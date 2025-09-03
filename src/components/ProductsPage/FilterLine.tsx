import {useState} from 'react'
import filterIcon from '../../assets/images/productsPage/filterIcon.png'
import byPriceIcon from '../../assets/images/productsPage/byPriceIcon.png'
import type {SortOption} from '../../types/byPrice'
import MobileFilter from './MobileFilter'

const FilterLine = () => {
  const [order, setOrder] = useState<SortOption>("highToLow")
  const [showMobileFilter, setShowMobileFilter] = useState<boolean>(false)

  const toggleMobileFilter = () => {
    setShowMobileFilter(prev => !prev)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption
    setOrder(value)

    console.log("Selected order:", value) //for demonstration purposes
  }

  return (
  <div className="bg-white py-11 flex justify-center items-center relative">
    <div className="bg-white w-86 flex justify-around items-center" id="filter-line-container">
      <div
        className="bg-white border border-d4 filter-box flex items-center justify-around min-w-41 min-h-14 px-2 rounded-md cursor-pointer"
        onClick={toggleMobileFilter}
      >
        <span className="text-sm font-normal">Filters</span>
        <img src={filterIcon} alt="filter-icon" className="w-6" />
      </div>

      <div className="bg-white border border-d4 filter-box flex items-center justify-around min-w-41 min-h-14 px-2 rounded-md relative">
        <select
          className="flex-1 text-xs bg-transparent outline-none appearance-none font-normal text-gray-700"
          name="byPrice"
          id="byPriceSelect"
          value={order}
          onChange={handleChange}
        >
          <option value="highToLow">By price: High to Low</option>
          <option value="lowToHigh">By price: Low to High</option>
        </select>
        <img src={byPriceIcon} alt="by-Price-Icon" className="w-3 pointer-events-none absolute right-2" />
      </div>
    </div>

    {showMobileFilter && (
      <MobileFilter
        onClose={toggleMobileFilter}
        onApply={(brands, range) => {
          console.log('Applied filters:', brands, range)
        }}
      />
    )}
  </div>
)

}

export default FilterLine