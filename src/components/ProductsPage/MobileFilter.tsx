import { useState, useEffect } from "react"
import leftArrowFilter from "../../assets/images/productsPage/leftArrowFilter.png"
import arrowToggle from "../../assets/images/productsPage/arrowToggle.png"
import type { MobileFilterProps } from "../../types/mobileFilterProps"
import RangeSlider from "./RangeSlider"
import BrandsFilter from "./BrandsFilter"

const MobileFilter = ({ onClose, onApply }: MobileFilterProps) => {
  const [showPrice, setShowPrice] = useState(true)

  const brands = [
    { name: "Apple", count: 148 },
    { name: "Samsung", count: 120 },
    { name: "Motorola", count: 90 },
    { name: "Xiaomi", count: 80 },
    { name: "POCO", count: 50 },
    { name: "Nokia", count: 30 },
    { name: "Honor", count: 20 },
    { name: "Realme", count: 70 },
    { name: "Asus", count: 40 },
    { name: "Sony", count: 25 },
  ]

  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 6000])

  const handleApply = () => {
    console.log("Apply clicked:", selectedBrands, priceRange)
    onApply?.(selectedBrands, priceRange)
  }

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
      <div className="w-full max-w-[688px] mx-auto px-4 py-6 flex items-center gap-4">
        <img
          src={leftArrowFilter}
          alt="left-arrow"
          className="w-3 cursor-pointer md:w-5"
          onClick={onClose}
        />
        <h2 className="font-medium text-2xl md:text-3xl">Filters</h2>
      </div>

      <div className="w-full max-w-[688px] mx-auto px-4 flex-1 overflow-y-auto">
        <button
          type="button"
          className="w-full flex justify-between items-center border-b border-b-b5 mb-6"
          onClick={() => setShowPrice((p) => !p)}
        >
          <h3 className="font-medium text-lg text-left md:text-2xl">Price</h3>
          <img
            src={arrowToggle}
            alt="arrow-price"
            className={`w-4 ${
              showPrice ? "rotate-180" : "rotate-0"
            } transition-transform duration-200 md:w-6`}
          />
        </button>

        {showPrice && (
          <div className="mb-6">
            <RangeSlider
              min={1000}
              max={6000}
              step={1}
              onChange={setPriceRange}
            />
          </div>
        )}

        <BrandsFilter
          brands={brands}
          selectedBrands={selectedBrands}
          onChange={setSelectedBrands}
        />
      </div>

      <div className="w-full max-w-[688px] mx-auto px-4 py-4 bg-white md:flex md:justify-center">
        <button
          type="button"
          onClick={handleApply}
          className="bg-black text-white md:text-xl w-full md:w-4/5 py-3 px-6 rounded-[8px]"
        >
          Apply
        </button>
      </div>
    </div>
  )
}

export default MobileFilter
