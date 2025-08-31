import React from "react";


import thumb1 from "../../assets/images/productDetailPage/iphone-thumb1.png";
import thumb2 from "../../assets/images/productDetailPage/iphone-thumb2.png";
import thumb3 from "../../assets/images/productDetailPage/iphone-thumb3.png";
import thumb4 from "../../assets/images/productDetailPage/iphone-thumb4.png"; 
import bigImage from "../../assets/images/productDetailPage/iphone-big.png";

export default function ProductGallery() {
  return (
    <div className="flex gap-4">
    
      <div className="flex flex-col gap-2">
       
        <img src={thumb1} alt="thumb1" className="w-16 h-16 border rounded-lg cursor-pointer" />
        <img src={thumb2} alt="thumb2" className="w-16 h-16 border rounded-lg cursor-pointer" />
        <img src={thumb3} alt="thumb3" className="w-16 h-16 border rounded-lg cursor-pointer" />
        <img src={thumb4} alt="thumb4" className="w-16 h-16 border rounded-lg cursor-pointer" />
      </div>

      
      <div className="flex-1">
        <img src={bigImage} alt="iPhone 14 Pro Max" className="w-full rounded-xl" />
      </div>
    </div>
  );
}
