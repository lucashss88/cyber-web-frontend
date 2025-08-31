import React from 'react';

import deliveryIcon from '../../assets/images/productDetailsPage/delivery-icon.svg';
import stockIcon from '../../assets/images/productDetailsPage/stock-icon.svg';
import guaranteedIcon from '../../assets/images/productDetailsPage/guaranteed-icon.svg';

export default function ProductDeliveryInfo() {

    const infoItems = [
        { icon: deliveryIcon, label: "Free Delivery", value: "1-2 day", alt: "Delivery Icon" },
        { icon: stockIcon, label: "In Stock", value: "Today", alt: "Stock Icon" },
        { icon: guaranteedIcon, label: "Guaranteed", value: "1 year", alt: "Guaranteed Icon" },
    ];

    return (
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 my-8">
            {infoItems.map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row items-center sm:gap-4 gap-2">
                    <div className="bg-gray-100 p-1 rounded-lg">
                        <img src={item.icon} alt={item.alt} className="h-12 w-12" />
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-sm whitespace-nowrap">{item.label}</p>
                        <p className="font-bold text-xs ">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}