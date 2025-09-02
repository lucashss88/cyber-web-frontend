'use client'
import {useState} from 'react'

type shopNowButtonProp = {
    colorBg: string;
    colorLine: string;
    colorText: string;
};

export default function shopNowButton({ colorBg, colorLine, colorText }: shopNowButtonProp) {

    const [isHouvered, setIsHovered] = useState(false);
    const [isActive, setIsAcvtive] = useState(false);

    const houverStyles = {
        backgroundColor: '#000000',
        borderColor: '#000000',
        color: '#FFFFFF',
    };

    const activeStyles = {
        backgroundColor: '#333333',
        borderColor: '#333333',
        color: '#FFFFFF',
    }

    return (
        <button 
            className="mt-6 px-[3.5rem] py-[1rem] border font-medium rounded w-fit mx-auto md:mx-0 cursor-pointer"
            style={{
                backgroundColor: isActive ? activeStyles.backgroundColor : (isHouvered ? houverStyles.backgroundColor : colorBg),
                borderColor: isActive ? activeStyles.borderColor : (isHouvered ? houverStyles.borderColor : colorLine),
                color: isActive ? activeStyles.color : (isHouvered ? houverStyles.color : colorText),
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseUp={() => setIsAcvtive(true)}
            onMouseUpCapture={() => setIsAcvtive(false)}
        >
            Shop now
        </button>
    );
}