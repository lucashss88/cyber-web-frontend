'use client'

import ShopNowButton from "./ShopNowHomeButton"
import AirPodsMaxMobile from "../../assets/images/Home/AirPodsMaxMobile.png"
import AppleVisionProMobile from "../../assets/images/Home/AppleVisionProMobile.png"
import PlayStationMobile from "../../assets/images/Home/PlayStationMobile.png"
import MacBookPro14Mobile from "../../assets/images/Home/MacBookPro14Mobile.png"

export default function ProductGrid() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 bg-white text-black">
            <div className="grid grid-cols-1">
                {/* AirPods Max */}
                <div className="bg-[#EDEDED] flex flex-col min-w-fit md:flex-row items-center gap-2 py-8 px-8">
                    <div className="md:w-1/2">
                        <img
                            src={AirPodsMaxMobile}
                            alt="AirPods Max"
                            className="w-full h-auto mb-4"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col text-center pr-5 md:pr-9">
                        <h2 className="font-inter font-light text-black mt-2 text-4xl">
                            Apple AirPods <span className="font-semibold">Max</span>
                        </h2>
                        <p className="font-inter text-gray-600 mt-2 text-base">
                            Computational audio. Listen, it's powerful
                        </p>
                    </div>
                </div>

                {/* Apple Vision Pro */}
                <div className="bg-[#353535] texte-white min-w-fit flex flex-col md:flex-row items-center py-8 px-8">
                    <div className="md:w-1/2">
                        <div>
                            <img
                                src={AppleVisionProMobile}
                                alt="Apple Vision Pro"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="w-full md:w-1/2 flex flex-col text-center pr-5 md:pr-9">
                            <h2 className="font-inter font-light text-white text-4xl"> Apple Vision <span className="font-semibold">Pro</span></h2>
                            <p className="font-inter text-[#909090] mt-2 text-base">
                                An immersive way to experience entertainment
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PlayStation 5 */}
            <div className="bg-white flex flex-col max-h-fit items-center gap-6 py-8 px-8">
                <div className="md:w-1/2">
                    <img 
                        src={PlayStationMobile}
                        alt="PlayStation 5"
                        className="w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col text-center pr-5 md:pr-9" >
                    <h2 className="font-inter text-black text-4xl font-light mb-4">PlayStation <span className="font-semibold">5</span></h2>
                    <p className="font-inter text-gray-500 mt-2 text-base leading-relaxed">
                        Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                    </p>
                </div>
            </div>

            {/* Macbook Air */}
            <div className="bg-[#EDEDED] flex flex-col md:flex-row items-center gap-3 py-8 px-8">
                <div className="md:w-1/2r">
                    <img
                        src={MacBookPro14Mobile}
                        alt="MacBook Air"
                        className="w-full h-auto"
                    />
                </div>
                <div className="font-inter flex flex-col items-center">
                    <h2 className="font-thin text-4xl">Macbook <span className="font-semibold">Air</span></h2>
                    <p className="text-gray-700 mt-2 text-base">
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                    </p>
                    <button 
                        className="mt-6 px-[33vw] py-[0.7rem] border font-medium rounded w-fit mx-auto md:mx-0 active:bg-black active:text-white active:border-white"
                    >
                        Shop now
                    </button>
                </div>
                </div>
        </section>
    );
}