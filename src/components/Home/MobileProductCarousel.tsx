'use client'

import {useState, useRef} from 'react'
import ShopNowButton from "./ShopNowHomeButton"

type Category = {
    title: string
    description: string,
    imgSrc: string,
    colorLineButton: string,
    colorTextButton: string,
    colorBg: string,
    colorText: string,
};

type Props = {
    categories: Category[],
};

export default function MobileProductCarousel({categories}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const minSwipeDistance = 50;

    function onTouchStart(e: React.TouchEvent) {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    }

    function onTouchMove(e: React.TouchEvent) {
        touchEndX.current = e.targetTouches[0].clientX;
    }

    function onTouchEnd() {
        if(!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        if (distance > minSwipeDistance) {
            setCurrentIndex((prev) => (prev + 1) % categories.length);
        } else if (distance < -minSwipeDistance) {
            setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
        }
    }

    const mouseStartX = useRef<number | null>(null);
    const mouseEndX = useRef<number | null>(null);
    const isDragging = useRef(false);

    function onMouseDown(e: React.MouseEvent) {
        isDragging.current = true;
        mouseStartX.current = e.clientX;
    }

    function onMouseMove(e: React.MouseEvent) {
        if (!isDragging.current) return;
        mouseEndX.current = e.clientX;
    }

    function onMouseUp() {
        if(!isDragging.current) return;

        isDragging.current = false;

        if (!mouseStartX.current || !mouseEndX.current) return;

        const distance = mouseStartX.current - mouseEndX.current;
        if (distance > minSwipeDistance) {
            setCurrentIndex((prev) => (prev + 1) % categories.length);
        } else if (distance < -minSwipeDistance) {
            setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
        }
        
        mouseStartX.current = null;
        mouseEndX.current = null;
    }
    
    const cat = categories[currentIndex];
    return (
        <section 
            className="w-full mx-auto rounded-md p-6 select-one"
            style={{
                color: cat.colorText,
                backgroundColor: cat.colorBg
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
        >
            <img
                src={cat.imgSrc}
                alt={cat.title}
                className="w-full rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{cat.title}</h2>
            <p className="mb-4">{cat.description}</p>
            <ShopNowButton colorBg="transparent" colorLine={cat.colorLineButton} colorText={cat.colorTextButton} />
            <div className="flex justify-center space-x-2">
                {categories.map((_, dotIndex) => (
                    <span
                        key = {dotIndex}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-200 ${
                            dotIndex === currentIndex ? "bg-black" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentIndex(dotIndex)}
                    />
                ))}
            </div>
        </section>
    );
}