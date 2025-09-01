
import React from 'react';
import ProductCard from '../../productDetailsPage/relatedProducts/ProductCard'; 


import iphone1 from '../../../assets/images/productDetailsPage/relatedProducts/iphone-1.png';
import headphone from '../../../assets/images/productDetailsPage/relatedProducts/headphone.png';
import smartwatch from '../../../assets/images/productDetailsPage/relatedProducts/smartwatch.png';
import iphone2 from '../../../assets/images/productDetailsPage/relatedProducts/iphone-2.png';



const fakeRelatedProducts = [
  { id: 1, imageUrl: iphone1, name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)', price: 1437 },
  { id: 2, imageUrl: headphone, name: 'AirPods Max Silver Starlight Aluminium', price: 549 },
  { id: 3, imageUrl: smartwatch, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium', price: 399 },
  { id: 4, imageUrl: iphone2, name: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)', price: 1499 },
];


const RelatedProducts = () => {
  return (
    <div className="my-12 mt-42 mb-16">
      <h2 className="text-3xl font-bold mb-6">Related Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fakeRelatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;