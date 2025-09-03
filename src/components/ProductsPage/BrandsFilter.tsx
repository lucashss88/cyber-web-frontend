import { useState } from "react"
import magnifier from "../../assets/images/productsPage/magnifier.png"

interface Brand {
  name: string
  count: number
}

interface BrandFilterProps {
  brands: Brand[]
  selectedBrands: string[]
  onChange: (brands: string[]) => void
}

const BrandsFilter = ({ brands, selectedBrands, onChange }: BrandFilterProps) => {
  const [query, setQuery] = useState("")

  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      
      <div className="bg-f5 w-full md:w-4/5 rounded-[8px] h-10 flex items-center md:m-auto px-4">
        <img src={magnifier} alt="magnifier" className="w-5 md:w-7" />
        <input
          type="text"
          className="outline-none flex-1 rounded-[8px] placeholder:text-sm md:placeholder:text-xl placeholder-65 placeholder:font-medium px-3 bg-transparent"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      
      <div className="mt-4 max-h-60 overflow-y-auto scrollbar-custom pr-1">
        {filteredBrands.map((brand) => {
          const checked = selectedBrands.includes(brand.name)
          return (
            <label
              key={brand.name}
              className="flex items-center gap-2 mb-2"
            >
              <input
                type="checkbox"
                className="w-4 h-4 md:w-6 md:h-6"
                checked={checked}
                onChange={() => {
                  onChange(
                    checked
                      ? selectedBrands.filter((b) => b !== brand.name)
                      : [...selectedBrands, brand.name]
                  )
                }}
              />
              <span className="text-sm md:text-xl text-black font-medium">
                {brand.name}
              </span>
              <span className="text-92 text-xs md:text-lg">{brand.count}</span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default BrandsFilter
