import React, { useState } from "react";
import type {RangeSliderProps} from '../../types/rangeSliderProps'

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step = 1, onChange}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [minInput, setMinInput] = useState(min.toString());
  const [maxInput, setMaxInput] = useState(max.toString());

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setMinInput(value);

  const newMin = Number(value);
  if (!isNaN(newMin) && newMin >= min && newMin <= maxValue) {
    setMinValue(newMin);
    if (onChange) onChange([newMin, maxValue]);
  }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxInput(value);

    const newMax = Number(value);
    if (!isNaN(newMax) && newMax <= max && newMax >= minValue) {
      setMaxValue(newMax);
      if (onChange) onChange([minValue, newMax]);
    }
  };

  const handleMinSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    setMinValue(newMin);
    setMinInput(newMin.toString());
    if (onChange) onChange([newMin, maxValue]);
  };

  const handleMaxSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    setMaxValue(newMax);
    setMaxInput(newMax.toString());
    if (onChange) onChange([minValue, newMax]);
  };


  return (
    <div className=" w-full max-w-md mb-6 md:m-auto">

      <div className="flex items-center gap-2 mb-4 justify-between ">
        <div className="flex flex-col md:items-center md:justify-center md:text-center">
          <label className="text-a7 text-sm md:text-xl">From</label>
          <input
            type="number"
            value={minInput}
            onChange={handleMinChange}
            className="border border-9f rounded px-2 py-1 w-24 md:w-4/5 md:text-lg"
          />
        </div>
        <span className="text-e7 md:text-xl ">—</span>
        <div className="flex flex-col  md:items-center md:justify-center md:text-center">
          <label className="text-a7 text-sm md:text-xl">To</label>
          <input
            type="number"
            value={maxInput}
            onChange={handleMaxChange}
            className="border border-9f rounded px-2 py-1 w-24 md:w-4/5 md:text-lg"
          />
        </div>
      </div>

      <div className="relative h-6">

        <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded"></div>


        <div
          className="absolute top-1/2 h-1 bg-black rounded"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>

 
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinSliderChange}
          className="absolute w-full appearance-none bg-transparent"
          style={{ zIndex: 2 }}
        />

 
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxSliderChange}
          className="absolute w-full appearance-none bg-transparent"
          style={{ zIndex: 1 }}
        />
      </div>

 
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            height: 16px;
            width: 16px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
            margin-top: 6px;
          }
          input[type="range"]::-moz-range-thumb {
            height: 16px;
            width: 16px;
            background: black;
            border-radius: 50%;
            cursor: pointer;
            margin-top: 6px;
          }
        `}
      </style>
    </div>
  );
};

export default RangeSlider;
