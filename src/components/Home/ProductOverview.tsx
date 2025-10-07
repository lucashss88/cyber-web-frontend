'use client'

import {useEffect, useState} from 'react';
import ProductCard from '../productDetailsPage/relatedProducts/ProductCard';

const categories = [
    {label: 'New Arrival', tag:'new_arrival'},
    {label: 'Bestseller', tag:'bestseller'},
    {label: 'Feature Products', tag:'featured_product'},
];

type ApiProduct = {
    id: number,
    name: string,
    price: string,
    tag: string,
    url_image: string,
};

type ProductCardProps = {
    id: number
    imageUrl: string,
    name: string,
    price: number,
};

export default function ProductOverview() {

    const [activeTab, setActiveTab] = useState<string>('New Arrival');
    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const activeTag = categories.find(c => c.label === activeTab)?.tag || 'new_arrival';

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/products/tag/${activeTag}`);
                const json = await response.json();

                const mappedProducts: ProductCardProps[] = (json.data || []).map((item: ApiProduct) => ({
                    id: item.id,
                    imageUrl: item.url_image,
                    name: item.name,
                    price: parseFloat(item.price),
                }));

                setProducts(mappedProducts);
            } catch (e) {
                console.error("Erro ao buscar produto: ", e);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [activeTag]);

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
            
            {loading ? (
                <div className='flex justify-center items-center h-200'>
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            )}
        </div>
    )
}