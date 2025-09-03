import { useState } from "react"
import filterIcon from "../../assets/images/productsPage/filterIcon.png"
import ByPrice from "./ByPrice"
import type { SortOption } from "../../types/byPrice"
import MobileFilter from "./MobileFilter"

const FilterLine = () => {
  const [order, setOrder] = useState<SortOption>("highToLow")
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const toggleMobileFilter = () => {
    setShowMobileFilter(prev => !prev)
  }

  return (
    <div className="bg-white py-11 flex justify-center items-center relative lg:hidden">
      <div
        className="bg-white w-19/20 flex justify-around items-center"
        id="filter-line-container"
      >
        {/* Botão de abrir filtros */}
        <div
          className="bg-white border border-d4 filter-box flex items-center justify-around min-w-41 min-h-14 md:min-w-50 md:min-h-17 px-2 rounded-md cursor-pointer"
          onClick={toggleMobileFilter}
        >
          <span className="text-sm font-normal md:text-2xl">Filters</span>
          <img src={filterIcon} alt="filter-icon" className="w-6 md:w-8" />
        </div>

        {/* Ordenação por preço */}
        <ByPrice order={order} setOrder={setOrder} />
      </div>

      {showMobileFilter && (
        <MobileFilter
          onClose={toggleMobileFilter}
          onApply={(brands, range) => {
            console.log("Applied filters:", brands, range)
          }}
        />
      )}
    </div>
  )
}

export default FilterLine
