'use client'

import BannerSummerSale from "../../assets/images/Home/BannerSummerSale.png"
import ShopNowButton from "./ShopNowHomeButton";
import SummerSaleBannerMobile from "./SummerSaleBannerMobile";

type isMobile = {
    appDisplay: boolean,
}

export default function SummerSaleBanner({ appDisplay }: isMobile) {

    if(appDisplay) {
        return (
            <SummerSaleBannerMobile />
        );
    }

    return (
        <section className="w-full relative overflow-hidden min-h-[20vh] flex justify-center items-center">
            <img 
                src={BannerSummerSale} 
                alt="Summer Sale Banner"
                className="w-full max-w-full h-auto object-contain" 
            />
            <div className="absolute text-center px-6">
                <h1 className="text-white text-3xl md:text-5xl lg:7xl font-thin">
                    Big Summer <span className="font-normal">Sale</span>
                </h1>
                <p className="mt-4 text-[#787878] max-w-md mx-auto text-xs lg:text-base">
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>
                <ShopNowButton colorBg="transparent" colorLine='#FFFFFF' colorText="#FFFFFF" /> 
            </div>
        </section>
    )
}