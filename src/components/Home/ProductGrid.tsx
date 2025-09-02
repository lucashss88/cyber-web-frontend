'use client'

import ShopNowButton from "./ShopNowHomeButton"
import ProductGridMobile from "./ProductGridMobile"
import PlayStation from "../../assets/images/Home/PlayStation.png"
import AirPodsMax from "../../assets/images/Home/AirPodsMax.png"
import AppleVisionPro from "../../assets/images/Home/AppleVisionPro.png"
import MacBookPro14 from "../../assets/images/Home/MacBookPro14.png"


type isMobile = {
    appDisplay: boolean,
}

export default function ProductGrid({ appDisplay }: isMobile) {

    if(appDisplay) {
        return (
            <ProductGridMobile />
        );
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-black">
            <div className="grid grid-cols-1">
                {/* PlayStation 5 */}
                <div className="bg-white flex flex-col max-h-fit md:flex-row items-center">
                    <div className="md:w-1/2">
                        <img 
                            src={PlayStation}
                            alt="PlayStation 5"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center pr-5 md:pr-9" >
                        <h2 className="font-inter text-black text-4xl font-semibold mb-4">PlayStation 5</h2>
                        <p className="font-inter text-gray-500 text-base leading-relaxed">
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* AirPods Max */}
                        <div className="bg-[#EDEDED] flex flex-col min-w-fit md:flex-row items-center gap-6">
                            <div className="md:w-1/2">
                                <img
                                    src={AirPodsMax}
                                    alt="AirPods Max"
                                    className="w-full h-auto mb-4"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center pr-5 md:pr-9">
                                <h2 className="font-inter font-light sm:text-5xl md:text-5xl text-black mt-2 text-sm">
                                    Apple AirPods <span className="font-semibold">Max</span>
                                </h2>
                                <p className="font-inter text-gray-600 mt-2 text-sm sm:text-base">
                                    Computational audio. Listen, it's powerful
                                </p>
                            </div>
                    </div>

                    {/* Apple Vision Pro */}
                    <div className="bg-[#353535] texte-white min-w-fit flex flex-col md:flex-row items-center gap-6">
                        <div className="md:w-1/2">
                            <div>
                                <img
                                    src={AppleVisionPro}
                                    alt="Apple Vision Pro"
                                    className="w-full h-auto mb-4"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center pr-5 md:pr-9">
                                <h2 className="font-inter font-light sm:text-5xl md:text-5xl text-white text-x1 sm:text-2x1"> Apple Vision <span className="font-semibold">Pro</span></h2>
                                <p className="font-inter text-[#909090] mt-2 text-sm sm:text-base">
                                    An immersive way to experience entertainment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Macbook Air */}
            <div className="bg-[#EDEDED] flex flex-col md:flex-row justify-between">
                <div className="font-inter flex-1 flex flex-col justify-center px-15">
                    <h2 className="font-thin text-2xl sm:text-5xl">Macbook <span className="font-semibold">Air</span></h2>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                    </p>
                    <ShopNowButton colorBg='#EDEDED' colorLine='#000000' colorText="#000000" /> 
                </div>
                    <div className="flex-1 flex justify-end items-center">
                        <img
                            src={MacBookPro14}
                            alt="MacBook Air"
                            className="max-h-[80vh] w-auto object-contain"
                        />
                    </div>
                </div>
        </section>
    )
}