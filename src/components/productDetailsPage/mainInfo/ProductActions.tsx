
// import React from 'react';

type Props = {
  isDisabled: boolean;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

export default function ProductActions({ isDisabled, onAddToCart, onAddToWishlist }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button 
        onClick={onAddToWishlist}
        disabled={isDisabled}
        className="py-3 px-6 border border-black rounded-lg font-semibold flex-1 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add to Wishlist
      </button>
      <button 
        onClick={onAddToCart}
        disabled={isDisabled}
        className="py-3 px-6 bg-black text-white rounded-lg font-semibold flex-1 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  );
}

