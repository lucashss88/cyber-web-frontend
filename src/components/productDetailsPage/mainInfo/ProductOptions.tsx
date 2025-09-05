
import React from "react";

type Props = {
  colors: { name: string, hex_code: string }[];
  memory: string[];
  selectedColor: string | null;
  selectedMemory: string | null;
  onColorSelect: (color: string) => void;
  onMemorySelect: (size: string) => void;
};

export default function ProductOptions({ colors, memory, selectedColor, selectedMemory, onColorSelect, onMemorySelect }: Props) {
  console.log(colors)
  return (
    <div className="space-y-4 mt-4">
      <div className="flex flex-row items-center gap-4">
        <h3 className="mb-0 text-sm font-semibold">Select Color:</h3>
        <div className="flex gap-2 items-center">
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => onColorSelect(color.hex_code)}
              className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.hex_code ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-gray-300'}`}
              style={{ backgroundColor: color.hex_code }}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2 hidden">Size</h3>
        <div className="grid grid-cols-4 gap-2 text-sm">
          {memory.map(size => {
            const isSelected = selectedMemory === size;

            const getButtonClasses = () => {
              if (isSelected) {
                return 'text-black border border-black';
              }
              if (size === '128GB') {
                return 'text-gray-300 border border-gray-300 hover:border-black';
              }
              return 'text-gray-500 border border-gray-300';
            };

            return (
              <button
                key={size}
                onClick={() => onMemorySelect(size)}
                className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${getButtonClasses()}`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}