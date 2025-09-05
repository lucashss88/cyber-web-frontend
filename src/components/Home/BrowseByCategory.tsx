'use client'

import LeftArrow from "../../assets/images/Home/LeftArrow.png"
import RightArrow from "../../assets/images/Home/RightArrow.png"
import GamingIcon from "../../assets/images/Home/GamingIcon.png"
import ComputersIcon from "../../assets/images/Home/ComputersIcon.png"
import HeadphonesIcon from "../../assets/images/Home/HeadphonesIcon.png"
import CamerasIcon from "../../assets/images/Home/CamerasIcon.png"
import SmartWatchesIcon from "../../assets/images/Home/SmartWatchesIcon.png"
import PhonesIcon from "../../assets/images/Home/PhonesIcon.png"

import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";

const iconMap: Record<string,string> = {
    "Phones": PhonesIcon,
    "Smart Watches": SmartWatchesIcon,
    "Cameras": CamerasIcon,
    "Headphones": HeadphonesIcon,
    "Computers": ComputersIcon,
    "Gaming": GamingIcon
};

export default function BrowseByCategory() {

    const [categories, setCategories] = useState<{label:string, icon:string}[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('http://localhost:3001/api/categories');
                const json = await response.json();
                const categoryNames: string[] = json.data;

                const categoriesAPIWithIcons = categoryNames.map(name => ({
                    label: name,
                    icon: iconMap[name] || ""
                }));

                setCategories(categoriesAPIWithIcons);
            } catch (e) {
                console.error("Erro ao buscar categorias: ", e);
            }
        }

        fetchCategories();
    }, [])

    const handleProductsCateg = async (categoryName: string) => {
        try {
            navigate(`/products_page/${encodeURIComponent(categoryName)}`);
        } catch (e) {
            console.error("Erro ao buscar produto: ", e);
        }
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
                        <div key={index} onClick={() => handleProductsCateg(cat.label)} className="w-28 h-28 bg-[#FAFAFA] rounded-lg flex flex-col items-center justify-center hover:bg-gray-200 transition cursor-pointer">
                            <img src={cat.icon} alt={cat.label} className="w-8 h-8 mb-2" />
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
