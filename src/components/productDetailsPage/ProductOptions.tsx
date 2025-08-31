import React from "react";

export default function ProductOptions() {
  return (
    <div className="space-y-4">
     
      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-purple-700 border-2 border-black"></button>
          <button className="w-8 h-8 rounded-full bg-gray-300"></button>
          <button className="w-8 h-8 rounded-full bg-yellow-500"></button>
        </div>
      </div>

     
      <div>
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg">128GB</button>
          <button className="px-4 py-2 border rounded-lg">256GB</button>
          <button className="px-4 py-2 border rounded-lg">512GB</button>
        </div>
      </div>
    </div>
  );
}
