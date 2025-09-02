'use client'

import IpadPro from "../../assets/images/Home/IpadPro.png"
import SamsungGalaxy from "../../assets/images/Home/SamsungGalaxy.png"
import MacbookPro from "../../assets/images/Home/MacbookPro.png"
import PopularProducts from "../../assets/images/Home/PopularProducts.png"
import ProductClassificatonCard from "./ProductClassificationCard"
import MobileProductCarousel from "./MobileProductCarousel"

type isMobile = {
    appDisplay: boolean,
}

const categories = [
    {
        title: "Popular Products", 
        description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        imgSrc: PopularProducts,
        colorLineButton: "#000000",
        colorTextButton: "#000000",
        colorBg: "#FFFFFF",
        colorText: "#000000"
    },
    {
        title: "Ipad Pro", 
        description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        imgSrc: IpadPro,
        colorLineButton: "#000000",
        colorTextButton: "#000000",
        colorBg: "#F9F9F9",
        colorText: "#000000"
    },
    {
        title: "Samsung Galaxy", 
        description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        imgSrc: SamsungGalaxy,
        colorLineButton: "#000000",
        colorTextButton: "#000000",
        colorBg: "#EAEAEA",
        colorText: "#000000"
    },
    {
        title: "Macbook Pro", 
        description: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        imgSrc: MacbookPro,
        colorLineButton: "#FFFFFF",
        colorTextButton: "#FFFFFF",
        colorBg: "#2C2C2C",
        colorText: "#FFFFFF"
    },
];

export default function ProductClassification({ appDisplay }: isMobile) {

    
    if(appDisplay) {
        return <MobileProductCarousel categories={categories}/>
    }

    return (    
        <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-20 py-10 sm:py-0 ">
            {categories.map((cat, index) => 
                <div key={index}>
                    <ProductClassificatonCard 
                        title={cat.title} 
                        description={cat.description} 
                        imageSrc={cat.imgSrc} 
                        colorLineButton={cat.colorLineButton} 
                        colorTextButton={cat.colorTextButton}
                        colorBg={cat.colorBg}
                        colorText={cat.colorText}
                    />
                </div>
            )}
        </section>
    )
}
