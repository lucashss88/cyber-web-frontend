import React from "react";


import thumb1 from "../../assets/images/productDetailsPage/iphone-thumb1.png";
import thumb2 from "../../assets/images/productDetailsPage/iphone-thumb2.png";
import thumb3 from "../../assets/images/productDetailsPage/iphone-thumb3.png";
import thumb4 from "../../assets/images/productDetailsPage/iphone-thumb4.png";
import bigImage from "../../assets/images/productDetailsPage/iphone-big.png";

export default function ProductGallery() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col-reverse items-center w-full sm:flex-row sm:gap-8 sm:items-center">
       
        <div className="flex flex-row gap-10 mt-8 sm:mt-0 sm:flex-col sm:gap-4 sm:items-center">
          <img src={thumb1} alt="thumb1" className="w-16 h-16 sm:w-20 sm:h-24 rounded-lg cursor-pointer" />
          <img src={thumb2} alt="thumb2" className="w-12 h-16 sm:w-12 sm:h-24 rounded-lg cursor-pointer" />
          <img src={thumb3} alt="thumb3" className="w-12 h-16 sm:w-12 sm:h-24 rounded-lg cursor-pointer" />
          <img src={thumb4} alt="thumb4" className="w-10 h-16 sm:w-10 sm:h-24 rounded-lg cursor-pointer" />
        </div>
        
        <div className="flex items-center justify-center w-full">
          <img src={bigImage} alt="iPhone 14 Pro Max" className="w-full max-w-[320px] sm:max-w-[420px] rounded-xl mx-auto" />
        </div>
      </div>
    </div>
  );
}