import {useEffect, useState} from "react"
import magnifier from "../../assets/images/productsPage/magnifier.png"
import arrowToggle from "../../assets/images/productsPage/arrowToggle.png"
import type { Brand } from "../../types/brands"


interface BrandFilterProps {
  brands: Brand[]
  selectedBrands: string[]
  onChange: (brands: string[]) => void
}

const BrandsFilter = ({ brands, selectedBrands, onChange }: BrandFilterProps) => {
  const [query, setQuery] = useState("")
  const [showBrands, setShowBrands] = useState(true)

  useEffect(() => {
    console.log(selectedBrands)
  }, [selectedBrands]);

  const filteredBrands = brands.filter((b) =>
    b.brand.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="lg:h-full">
      <div className=" lg:w-69">
        <button
          type="button"
          className="w-full flex justify-between items-center border-b border-b-b5 mb-6"
          onClick={() => setShowBrands((prev) => !prev)}
        >
          <h3 className="font-medium text-lg text-left md:text-2xl">Brand</h3>
          <img
            src={arrowToggle}
            alt="arrow-brand"
            className={`w-4 ${showBrands ? "rotate-180" : "rotate-0"} transition-transform duration-200 md:w-6`}
          />
        </button>
      </div>

      {showBrands && (
        <>
          <div className="bg-f5 w-full md:w-4/5 rounded-[8px] h-10 flex items-center md:m-auto px-4 lg:w-full">
            <img src={magnifier} alt="magnifier" className="w-5 md:w-7" />
            <input
              type="text"
              className="outline-none flex-1 rounded-[8px] placeholder:text-sm md:placeholder:text-xl placeholder-65 placeholder:font-medium px-3 bg-transparent"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="mt-4 max-h-60 lg:max-h-70 overflow-y-auto scrollbar-custom pr-1 lg:overflow-y-scroll">
            {filteredBrands.map((brand) => {
              const checked = selectedBrands.includes(brand.brand)
              return (
                <label
                  key={brand.id}
                  className="flex items-center gap-2 mb-2"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 md:w-6 md:h-6"
                    checked={checked}
                    onChange={() => {
                      onChange(
                        checked
                          ? selectedBrands.filter((b) => b !== brand.brand)
                          : [...selectedBrands, brand.brand]
                      )
                    }}
                  />
                  <span className="text-sm md:text-xl text-black font-medium">
                    {brand.brand}
                  </span>
                  <span className="text-92 text-xs md:text-lg">{brand.total}</span>
                </label>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default BrandsFilter
