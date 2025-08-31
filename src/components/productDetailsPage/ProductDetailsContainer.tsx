
import React, { useState } from 'react';

import ProductGallery from './ProductGallery';
import ProductTitle from './ProductTitle';
import ProductOptions from './ProductOptions';
import ProductSpecs from './ProductSpecs';
import ProductActions from './ProductActions';
import ProductDescription from './ProductDescription';
import ProductDeliveryInfo from './ProductDeliveryInfo';

const fakeProductData = {
    name: 'Apple iPhone 14 Pro Max', price: 1399, originalPrice: 1499,
    colors: [{name: 'black', hex: '#000'}, {name: 'purple', hex: '#A020F0'}, {name: 'red', hex: '#FF0000'}, {name: 'yellow', hex: '#FFD700'}, {name: 'gray', hex: '#D3D3D3'}],
    memory: ["128GB", "256GB", "512GB", "1TB"],
};

const ProductDetailsContainer = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);
  const isSelectionComplete = !!selectedColor && !!selectedMemory;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <ProductGallery />
      <div className="flex flex-col">
        <ProductTitle />
        <ProductOptions
          colors={fakeProductData.colors} memory={fakeProductData.memory}
          selectedColor={selectedColor} selectedMemory={selectedMemory}
          onColorSelect={setSelectedColor} onMemorySelect={setSelectedMemory}
        />
        <ProductSpecs />
        <ProductDescription />
        <div className="flex-grow" />
        <ProductActions
          isDisabled={!isSelectionComplete}
          onAddToCart={() => alert('Added to cart!')} 
          onAddToWishlist={() => alert('Added to wishlist!')}
        />
        <ProductDeliveryInfo />
      </div>
    </div>
  );
};

export default ProductDetailsContainer;