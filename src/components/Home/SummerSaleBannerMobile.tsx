'use client'

import BannerSummerSaleMobile from "../../assets/images/Home/BannerSummerSaleMobile.png"
import ShopNowButton from "./ShopNowHomeButton";

export default function SummerSaleBannerMobile() {

    return (
        <section className="w-full relative overflow-hidden max-h-[100vh] flex justify-center items-center">
            <img 
                src={BannerSummerSaleMobile} 
                alt="Summer Sale Banner"
                className="w-full max-w-full h-auto object-contain" 
            />
            <div className="absolute text-center px-6 gap-10">
                <h1 className="text-white text-6xl sm:text-8xl font-thin leading-snug">
                    Big Summer <span className="font-normal">Sale</span>
                </h1>
                <p className="mt-4 text-[#787878] max-w-md mx-auto text-xl sm:text-2xl">
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </p>
                <ShopNowButton colorBg="transparent" colorLine='#FFFFFF' colorText="#FFFFFF" /> 
            </div>
        </section>
    )
}