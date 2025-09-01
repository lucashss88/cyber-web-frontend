import React from "react";

type Props = {
  name: string;
  price: number;
  originalPrice: number | null;
  discountedPrice: number;
}

export default function ProductTitle({ name, price, originalPrice, discountedPrice }: Props) {
  return (
    <div className="mb-4">
 
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-2xl font-semibold">${discountedPrice}</span>
        {originalPrice && <span className="text-gray-500 line-through">${originalPrice}</span>}
      </div>
    </div>
  );
}
