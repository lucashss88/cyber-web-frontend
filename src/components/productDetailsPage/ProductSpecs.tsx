import React from 'react';


import screenIcon from '../../assets/images/productDetailsPage/screen-icon.svg'
import cpuIcon from '../../assets/images/productDetailsPage/cpu-icon.svg';
import coresIcon from '../../assets/images/productDetailsPage/cores-icon.svg';
import mainCameraIcon from '../../assets/images/productDetailsPage/camera-icon.svg';
import frontCameraIcon from '../../assets/images/productDetailsPage/front-camera-icon.svg';
import batteryIcon from '../../assets/images/productDetailsPage/battery-icon.svg';

export default function ProductSpecs() {
 
  const specs = [
    { label: "Screen size", value: "6.7\"", iconSrc: screenIcon },
    { label: "CPU", value: "Apple A16 Bionic", iconSrc: cpuIcon },
    { label: "Number of Cores", value: "6", iconSrc: coresIcon },
    { label: "Main camera", value: "48-12-12 MP", iconSrc: mainCameraIcon },
    { label: "Front-camera", value: "12 MP", iconSrc: frontCameraIcon },
    { label: "Battery capacity", value: "4323 mAh", iconSrc: batteryIcon },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8 rounded-lg">
      {specs.map((spec) => (
        <div key={spec.label} className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
          
          <img src={spec.iconSrc} alt={`${spec.label} icon`} className="h-7 w-7 flex-shrink-0" />

          <div className="text-left">
            <p className="text-xs text-gray-500 whitespace-nowrap">{spec.label}</p>
            <p className="font-semibold text-sm whitespace-nowrap">{spec.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}