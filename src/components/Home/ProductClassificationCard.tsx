'use client'

import ShopNowButton from "./ShopNowHomeButton"

type ProductCard = {
    title: string,
    description: string,
    imageSrc: string,
    colorLineButton: string,
    colorTextButton: string,
    colorBg: string,
    colorText: string,
}

export default function ProductClassificatonCard({title, description, imageSrc, colorLineButton, colorTextButton, colorBg, colorText}: ProductCard) {

    return (    
        <div 
            className="w-full max-w-sm mx-auto p-6 flex flex-col justify-start"
            style={{
                backgroundColor: colorBg,
                color: colorText,
            }}
        >
            <img 
                src={imageSrc} 
                alt={title || 'Product Image'}
                className="w-full max-h-60 object-contain mb-6" 
            />
            <h2 className="text-2xl font-light mb-2">{title}</h2>
            <p className="text-xs font-medium text-[#909090] mb-2">{description}</p>
            <ShopNowButton colorBg={colorBg} colorLine={colorLineButton} colorText={colorTextButton} className="!text-xs !mt-2 !px-8 !py-2" /> 
        </div>
    )
}