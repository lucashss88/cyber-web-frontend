'use client'

import ShopNowButton from "./ShopNowHomeButton"
import IPhone14ProMobile from "../../assets/images/Home/Iphone14Mobile.png"
import IPhone14 from "../../assets/images/Home/Iphone.png"

type isMobile = {
    appDisplay: boolean,
}

export default function IntroductionHome({ appDisplay }: isMobile) {

    if(appDisplay) {
        return (
            <section className="flex flex-col md:flex-row items-center justify-between bg-[#211c24] gap-8 text-white pt-4 pl-2 pr-2">
                <div className="font-inter max-w-2xl text-center md:text-left">
                    <h2 className="font-bold text-2xl text-gray-500">Pro. Beyond</h2>
                    <h1 className="font-thin text-6xl mt-2 leading-tight text-balance">
                        IPhone 14 <span className="font-bold">Pro</span>
                    </h1>
                    <p className="text-gray-500 mt-4 text-2xl whitespace-normal">
                        Created to change everything for the better. For everyone.
                    </p>
                    <ShopNowButton colorBg='#211c24' colorLine="#FFFFFF" colorText="#FFFFFF" /> 
                </div>

                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <img
                        src={IPhone14ProMobile}
                        alt="IPhone 14 Pro"
                        className="w-full h-auto rounded"
                    />
                </div>
            </section>
        )
    }

    return (    
        <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-20 py-10 sm:py-0 bg-[#211c24] gap-8 text-white">
            <div className="font-inter max-w-2xl text-center md:text-left">
                <h2 className="font-bold text-base sm:text-3xl text-gray-500">Pro. Beyond</h2>
                <h1 className="font-thin text-4xl sm:text-5xl md:text-8xl mt-2 leading-tight text-balance">
                    IPhone 14 <span className="font-bold">Pro</span>
                </h1>
                <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-xl whitespace-normal">
                    Created to change everything for the better. For everyone.
                </p>
                <ShopNowButton colorBg='#211c24' colorLine="#FFFFFF" colorText="#FFFFFF" /> 
            </div>

            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                    src={IPhone14}
                    alt="IPhone 14 Pro"
                    className="w-full h-auto rounded"
                />
            </div>
        </section>
    )
}
