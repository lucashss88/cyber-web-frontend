'use client'

import {useState} from 'react'
import {useNavigate} from "react-router-dom";

type shopNowButtonProp = {
    colorBg: string,
    colorLine: string,
    colorText: string,
    className?: string,
};

export default function shopNowButton({ colorBg, colorLine, colorText, className}: shopNowButtonProp) {

    const [isHouvered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    const handleProductsCateg = async () => {
        try {
            navigate(`/products_page`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
            console.error("Erro ao navegar para pagina de produtos: ", e);
        }
    }

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
            className={`mt-6 px-[3.5rem] py-[1rem] border font-medium rounded w-fit mx-auto md:mx-0 cursor-pointer transition-all ease-in-out duration-300 ${className ?? ''}`}
            style={{
                backgroundColor: isActive ? activeStyles.backgroundColor : (isHouvered ? houverStyles.backgroundColor : colorBg),
                borderColor: isActive ? activeStyles.borderColor : (isHouvered ? houverStyles.borderColor : colorLine),
                color: isActive ? activeStyles.color : (isHouvered ? houverStyles.color : colorText),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseUp={() => setIsActive(true)}
            onMouseUpCapture={() => setIsActive(false)}
            onClick={() => handleProductsCateg()}
        >
            Shop now
        </button>
    );
}