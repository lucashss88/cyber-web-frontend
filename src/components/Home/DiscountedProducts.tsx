'use client'

import {useEffect, useState} from 'react';
import ProductCard from '../productDetailsPage/relatedProducts/ProductCard';

type ApiProduct = {
    id: number,
    name: string,
    price: string,
    tag: string,
    url_image: string,
};

type ProductCardProps = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
};

export default function DiscountedProducts() {

    const [products, setProducts] = useState<ProductCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/products/tag/discount_up_to_50`);
                const json = await response.json();

                const mappedProducts: ProductCardProps[] = (json.data || []).map((item: ApiProduct) => ({
                    id: item.id,
                    imageUrl: item.url_image,
                    name: item.name,
                    price: parseFloat(item.price),
                }));

                setProducts(mappedProducts);
            } catch (e) {
                console.error("Erro ao buscar produtos com desconto: ", e);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, []);

    return (    
        <div className="w-full bg-white py-10 px-3 sm:px-10">
            <div className="max-w-6xl mx-auto px-4 pr-4">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-medium mb-6">Discounted up to -50%</h2>            
                </div>
            </div>

            {loading ? (
                <div className='flex justify-center items-center h-200'>
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
                    {products.slice(0, 4).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            )}
        </div>
    )
}
