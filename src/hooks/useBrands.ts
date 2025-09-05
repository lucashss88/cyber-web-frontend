import { useEffect, useState } from "react";
import type { Brand } from "../types/brands";


export function useBrands() {
    const url = import.meta.env.VITE_API_URL;
    const [brands, setBrands] = useState<Brand[]>([])

    useEffect(() => {
        async function fetchBrands() {
            try {
                const response = await fetch(`${url}/api/brands`);

                if (!response.ok) {
                    throw new Error(`O servidor respondeu com o status:${response.status}`);
                }

                const data = await response.json()
                setBrands(data.data);
            } catch (error) {
                console.error("Error fetching brands: ", error) 
            }
        }

        fetchBrands();
    }, [url]);


    return {brands};
}