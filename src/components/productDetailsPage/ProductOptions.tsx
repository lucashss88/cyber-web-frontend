
import React from "react";

type Props = {
  colors: { name: string, hex: string }[];
  memory: string[];
  selectedColor: string | null;
  selectedMemory: string | null;
  onColorSelect: (color: string) => void;
  onMemorySelect: (size: string) => void;
};

export default function ProductOptions({ colors, memory, selectedColor, selectedMemory, onColorSelect, onMemorySelect }: Props) {
  return (
    <div className="space-y-4 mt-4">
      <div>
        <h3 className="font-semibold mb-2">Select Color:</h3>
        <div className="flex gap-2">
          {colors.map(color => (
            <button 
              key={color.name} 
              onClick={() => onColorSelect(color.hex)}
              className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.hex ? 'ring-2 ring-offset-2 ring-blue-500' : 'border-gray-300'}`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {memory.map(size => {
            const isSelected = selectedMemory === size;
          
            const getButtonClasses = () => {
              if (size === '128GB') {
                return 'text-gray-200 border border-gray-200 cursor-not-allowed';
              }
              
              if (isSelected) {
                return 'text-black border border-black'; 
              }
              
              return 'text-gray-500 border border-gray-300';
            };

            return (
              <button 
                key={size}
                onClick={() => onMemorySelect(size)}
                disabled={size === '128GB'}
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