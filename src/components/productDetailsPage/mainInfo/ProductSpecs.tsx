// import React from 'react';

import screenIcon from '../../../assets/images/productDetailsPage/mainInfo/screen-icon.svg'
import cpuIcon from '../../../assets/images/productDetailsPage/mainInfo/cpu-icon.svg';
import coresIcon from '../../../assets/images/productDetailsPage/mainInfo/cores-icon.svg';
import mainCameraIcon from '../../../assets/images/productDetailsPage/mainInfo/camera-icon.svg';
import frontCameraIcon from '../../../assets/images/productDetailsPage/mainInfo/front-camera-icon.svg';
import batteryIcon from '../../../assets/images/productDetailsPage/mainInfo/battery-icon.svg';

type Props = {
  specs: {
    screen_size?: string;
    cpu?: string;
    total_cores?: string;
    main_camera?: string;
    front_camera?: string;
    battery?: string;
  }
}

export default function ProductSpecs({ specs }: Props) {
 
  const specList = [
    { label: "Screen size", value: specs.screen_size || 'N/A', iconSrc: screenIcon },
    { label: "CPU", value: specs.cpu || 'N/A', iconSrc: cpuIcon },
    { label: "Number of Cores", value: specs.total_cores || 'N/A', iconSrc: coresIcon },
    { label: "Main camera", value: specs.main_camera || 'N/A', iconSrc: mainCameraIcon },
    { label: "Front-camera", value: specs.front_camera || 'N/A', iconSrc: frontCameraIcon },
    { label: "Battery capacity", value: specs.battery || 'N/A', iconSrc: batteryIcon },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-start gap-4 my-8 rounded-lg">
      {specList.map((spec) => (
        <div key={spec.label} className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
          <img src={spec.iconSrc} alt={`${spec.label} icon`} className="h-7 w-7 flex-shrink-0" />
          <div className="text-left flex-1">
            <p className="text-xs text-gray-500">{spec.label}</p>
            <p className="font-semibold text-sm">{spec.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}