'use client'

import LeftArrow from "../../assets/images/Home/LeftArrow.png"
import RightArrow from "../../assets/images/Home/RightArrow.png"
import GamingIcon from "../../assets/images/Home/GamingIcon.png"
import ComputersIcon from "../../assets/images/Home/ComputersIcon.png"
import HeadphonesIcon from "../../assets/images/Home/HeadphonesIcon.png"
import CamerasIcon from "../../assets/images/Home/CamerasIcon.png"
import SmartWatchesIcon from "../../assets/images/Home/SmartWatchesIcon.png"
import PhonesIcon from "../../assets/images/Home/PhonesIcon.png"

type isMobile = {
    appDisplay: boolean,
}

const categories = [
    {label: 'Phones', icon:PhonesIcon},
    {label: 'Smart Watches', icon:SmartWatchesIcon},
    {label: 'Cameras', icon:CamerasIcon},
    {label: 'Headphones', icon:HeadphonesIcon},
    {label: 'Computers', icon:ComputersIcon},
    {label: 'Gaming', icon:GamingIcon}
];

export default function BrowseByCategory({ appDisplay }: isMobile) {

    if(appDisplay) {
        return (
            <h1>IsMobile</h1>
        )
    }

    return (    
        <div className="w-full bg-white py-10">
            <div className="max-w-6xl mx-auto px-4 pr-4">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold mb-6">Browse By Category</h2>
                    <div className="flex gap-3">
                        <button>
                            <img
                                src={LeftArrow}
                                alt="Left Arrow"
                                className="w-5 h-5 hover: opacity-60 transition cursor-pointer"
                            />
                        </button>
                        <button>
                            <img
                                src={RightArrow}
                                alt="Right Arrow"
                                className="w-5 h-5 hover: opacity-60 transition cursor-pointer"
                            />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center gap-6 flex-wrap">
                    {categories.map((cat, index) => 
                        <div key={index} className="w-28 h-28 bg-gray-100 rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                            <div className="text-3xl mb-2">{cat.icon}</div>
                            <span className="text-sm font-medium text-center">
                                {cat.label}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
