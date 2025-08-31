import React from "react";

export default function ProductActions() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <button className="px-6 py-3 border rounded-lg">Add to Wishlist</button>
      <button className="px-6 py-3 bg-black text-white rounded-lg">Add to Cart</button>
    </div>
  );
}


