import React from "react";

export default function ProductTitle() {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold">Apple iPhone 14 Pro Max</h1>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-2xl font-semibold">$1399</span>
        <span className="text-gray-500 line-through">$1499</span>
      </div>
    </div>
  );
}
