import { useState, useEffect } from 'react'
import leftArrowFilter from '../../assets/images/productsPage/leftArrowFilter.png'
import arrowToggle from '../../assets/images/productsPage/arrowToggle.png'
import magnifier from '../../assets/images/productsPage/magnifier.png'
import type { MobileFilterProps } from '../../types/mobileFilterProps'
import RangeSlider from './RangeSlider'

const MobileFilter = ({ onClose, onApply }: MobileFilterProps) => {
  const [showPrice, setShowPrice] = useState(true)
  const [showBrand, setShowBrand] = useState(true)
  const [query, setQuery] = useState('')

  // brands example
  const brands = [
    { name: 'Apple', count: 148 },
    { name: 'Samsung', count: 120 },
    { name: 'Motorola', count: 90 },
    { name: 'Xiaomi', count: 80 },
    { name: 'POCO', count: 50 },
    { name: 'Nokia', count: 30 },
    { name: 'Honor', count: 20 },
    { name: 'Realme', count: 70 },
    { name: 'Asus', count: 40 },
    { name: 'Sony', count: 25 },
  ]

  const filteredBrands = brands.filter(b =>
    b.name.toLowerCase().includes(query.toLowerCase())
  )

  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([1000, 6000])

  const handleApply = () => {
    console.log("Apply clicked:", selectedBrands, priceRange)
    onApply?.(selectedBrands, priceRange)
    
  }

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  return (
    <div className=" fixed inset-0 z-[9999] bg-white flex flex-col">
      <div className=" w-full max-w-[688px] mx-auto px-4 py-6 flex items-center gap-4">
        <img
          src={leftArrowFilter}
          alt="left-arrow"
          className="w-3 cursor-pointer md:w-5"
          onClick={onClose}
        />
        <h2 className="font-medium text-2xl md:text-3xl">Filters</h2>
      </div>

      <div className=" w-full max-w-[688px] mx-auto px-4 flex-1 overflow-y-auto">
        <button
          type="button"
          className="w-full flex justify-between items-center border-b border-b-b5 mb-6"
          onClick={() => setShowPrice(p => !p)}
        >
          <h3 className="font-medium text-lg text-left md:text-2xl">Price</h3>
          <img
            src={arrowToggle}
            alt="arrow-price"
            className={`w-4 ${showPrice ? 'rotate-180' : 'rotate-0'} transition-transform duration-200 md:w-6`}
          />
        </button>

        {showPrice && (
          <div className="mb-6">
            <RangeSlider min={1000} max={6000} step={1} onChange={setPriceRange} />
          </div>
        )}

        <button
          type="button"
          className="w-full flex justify-between items-center border-b border-b-b5 mb-6"
          onClick={() => setShowBrand(b => !b)}
        >
          <h3 className="font-medium text-lg text-left md:text-2xl">Brand</h3>
          <img
            src={arrowToggle}
            alt="arrow-brand"
            className={`w-4 ${showBrand ? 'rotate-180' : 'rotate-0'} transition-transform duration-200 md:w-6`}
          />
        </button>

        {showBrand && (
          <>
            <div className="bg-f5 w-full md:w-4/5 rounded-[8px] h-10 flex items-center md:m-auto px-4">
              <img src={magnifier} alt="magnifier" className="w-5 md:w-7" />
              <input
                type="text"
                className="outline-none flex-1 rounded-[8px] placeholder:text-sm md:placeholder:text-xl placeholder-65 placeholder:font-medium px-3 bg-transparent"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>

            <div className=" mt-4 max-h-60 overflow-y-auto scrollbar-custom pr-1">
              {filteredBrands.map((brand) => {
                const checked = selectedBrands.includes(brand.name)
                return (
                  <label key={brand.name} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 md:w-6 md:h-6"
                      checked={checked}
                      onChange={() => {
                        setSelectedBrands(prev =>
                          checked ? prev.filter(b => b !== brand.name) : [...prev, brand.name]
                        )
                      }}
                    />
                    <span className="text-sm md:text-xl text-black font-medium">{brand.name}</span>
                    <span className="text-92 text-xs md:text-lg">{brand.count}</span>
                  </label>
                )
              })}
            </div>
          </>
        )}
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
