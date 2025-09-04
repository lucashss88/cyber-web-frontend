import React from "react";


const ProductGallery = ({ imageUrl }: { imageUrl: string }) => {
  
  const mainImage = imageUrl;
  const thumbnails = [imageUrl, imageUrl, imageUrl, imageUrl]; 

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col-reverse items-center w-full sm:flex-row sm:gap-8 sm:items-center">
       
        <div className="flex flex-row gap-10 mt-8 sm:mt-0 sm:flex-col sm:gap-4 sm:items-center">
         
          {thumbnails.map((thumbUrl, index) => (
            <img 
              key={index}
              src={thumbUrl} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-16 h-20 object-contain rounded-lg cursor-pointer hover:border-black" 
            />
          ))}
        </div>
        
        <div className="flex items-center justify-center w-full">
         
          <img 
            src={mainImage} 
            alt="Imagem principal do produto" 
            className="w-full max-w-[320px] sm:max-w-[420px] h-auto object-contain rounded-xl mx-auto" 
          />
        </div>
      </div>
    </div>
  );
}

export default ProductGallery;

