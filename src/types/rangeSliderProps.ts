export interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value?: [number, number]; 
  onChange?: (range: [number, number]) => void;
}