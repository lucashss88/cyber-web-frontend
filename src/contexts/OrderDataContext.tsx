import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem, ShoppingCart } from "../types/cart";
import type { Address } from "../types/address";

interface OrderDataContextType {
    products: CartItem,
    shoppingCart: ShoppingCart,
    address: Address,
    total: number,
    paymentMethod: string,
    shippingMethod: string | null,
    setProducts: (products: CartItem) => void,
    setShoppingCart: (shoppingCart: ShoppingCart) => void,
    setAddress: (address: Address) => void,
    setTotal: (total: number) => void,
    setPaymentMethod: (paymentMethod: string) => void,
    setShippingMethod: (shippingMethod: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const OrderDataContext = createContext<OrderDataContextType | undefined>(undefined);

export function OrderDataProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<CartItem>({} as CartItem);
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({} as ShoppingCart);
    const [address, setAddress] = useState<Address>({} as Address);
    const [total, setTotal] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [shippingMethod, setShippingMethod] = useState<string | null>(null);

    return (
        <OrderDataContext.Provider value={{
            products,
            shoppingCart,
            address,
            total,
            paymentMethod,
            shippingMethod,
            setProducts,
            setShoppingCart,
            setAddress,
            setTotal,
            setPaymentMethod,
            setShippingMethod
        }}>
            {children}
        </OrderDataContext.Provider>
    )
}