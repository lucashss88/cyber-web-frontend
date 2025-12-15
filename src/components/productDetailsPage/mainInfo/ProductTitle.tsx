// import React from "react";

type Props = {
  name: string;
  price: number;
  originalPrice: number | null;
  discountedPrice: number;
}

export default function ProductTitle({ name, originalPrice, discountedPrice }: Props) {
  return (
    <div className="mb-4 mt-4 sm:mt-20">
 
      <h1 className="text-5xl font-bold">{name}</h1>
      <div className="flex items-center gap-4 mt-2">
        <span className="mt-5 text-4xl font-medium">${discountedPrice}</span>
        {originalPrice && <span className="mt-5 text-2xl text-gray-400 line-through">${originalPrice}</span>}
      </div>
    </div>
  );
}
