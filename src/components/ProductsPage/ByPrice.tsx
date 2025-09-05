import React from "react"
import byPriceIcon from "../../assets/images/productsPage/byPriceIcon.png"
import type { SortOption } from "../../types/byPrice"

interface ByPriceProps {
  order: SortOption
  setOrder: (order: SortOption) => void
}

const ByPrice: React.FC<ByPriceProps> = ({ order, setOrder }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortOption
    setOrder(value)
    console.log("Selected order:", value)
  }

  return (
    <div className="bg-white border border-d4 filter-box flex items-center justify-around min-w-41 min-h-14 md:min-w-50 md:min-h-17 px-2 rounded-md relative lg:min-h-10">
      <select
        className="flex-1 text-xs md:text-sm bg-transparent outline-none appearance-none font-normal text-gray-700"
        name="byPrice"
        id="byPriceSelect"
        value={order}
        onChange={handleChange}
      >
        <option value="highToLow">By price: High to Low</option>
        <option value="lowToHigh">By price: Low to High</option>
      </select>
      <img
        src={byPriceIcon}
        alt="by-Price-Icon"
        className="w-3 md:w-5 pointer-events-none absolute right-2"
      />
    </div>
  )
}

export default ByPrice
