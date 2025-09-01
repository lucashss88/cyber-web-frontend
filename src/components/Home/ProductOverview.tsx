'use client'

import {useState} from 'react';

const categories = [
    {label: 'New Arrival'},
    {label: 'Bestseller'},
    {label: 'Feature Products'},
];

export default function ProductOverview() {

    const [activeTab, setActiveTab] = useState('New Arrival');

    return (    
        <div className="max-w-6xl mx-auto px-4 pr-4">
            <div className="flex justify-start gap-6">
                {categories.map((cat, index) => 
                    <div key={index} className="text-2xl font-semibold mb-6">
                        <button onClick={() => setActiveTab(cat.label)}
                        className={`text-sm pb-2 cursor-pointer transition duration-200 
                        ${
                            activeTab === cat.label
                                ? 'font-semibold text-black border-b-3 border-black leading-none' 
                                : 'text-gray-400 hover:text-black' 
                        }`}
                        >
                            {cat.label}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}