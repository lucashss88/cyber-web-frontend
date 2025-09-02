'use client';

import IntroductionHome from "../components/Home/IntroductionHome";
import ProductGrid from "../components/Home/ProductGrid"
import BrowseByCategory from "../components/Home/BrowseByCategory";
import ProductOverview from "../components/Home/ProductOverview";
import ProductClassification from "../components/Home/ProductClassification";
import { useState, useEffect } from "react";

export default function HomePage() {
    const [isMobile,setIsMobile] = useState(false);

    const handleScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

    useEffect(() => {
        handleScreenSize();
        window.addEventListener('resize', handleScreenSize);

        return () => window.removeEventListener('resize', handleScreenSize);
    }, []);


    return (
        <main className="min-h-screen">
            <IntroductionHome appDisplay={isMobile}/>
            <ProductGrid appDisplay={isMobile}/>
            <BrowseByCategory />
            <ProductOverview />
            <ProductClassification appDisplay={isMobile}/>
        </main>
    )
}