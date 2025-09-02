export interface MobileFilterProps {
    onClose: () => void
    onApply?: (selectedBrands: string[], priceRange?: [number, number]) => void
}