import React, { useState } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step = 1 }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxValue) setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minValue) setMaxValue(value);
  };

  return (
    <div className="w-full max-w-md mb-6">

      <div className="flex items-center gap-2 mb-4 justify-between">
        <div className="flex flex-col">
          <label className="text-a7 text-sm">From</label>
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            className="border border-9f rounded px-2 py-1 w-24"
          />
        </div>
        <span className="text-e7 ">—</span>
        <div className="flex flex-col">
          <label className="text-a7 text-sm">To</label>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            className="border border-9f rounded px-2 py-1 w-24"
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
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent"
          style={{ zIndex: minValue < maxValue ? 2 : 1 }}
        />

 
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent"
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
          }
        `}
      </style>
    </div>
  );
};

export default RangeSlider;
