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
    SetProducts: (products: CartItem) => void,
    SetShoppingCart: (shoppingCart: ShoppingCart) => void,
    SetAddress: (address: Address) => void,
    SetTotal: (total: number) => void,
    SetPaymentMethod: (paymentMethod: string) => void,
    SetShippingMethod: (shippingMethod: string) => void
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

    const SetProducts = (products: CartItem) => {
        setProducts(products);
    }

    const SetShoppingCart = (shoppingCart: ShoppingCart) => {
        setShoppingCart(shoppingCart);
    }

    const SetAddress = (address: Address) => {
        setAddress(address);
    }

    const SetTotal = (total: number) => {
        setTotal(total);
    }

    const SetPaymentMethod = (paymentMethod: string) => {
        setPaymentMethod(paymentMethod);
    }

    const SetShippingMethod = (shippingMethod: string) => {
        setShippingMethod(shippingMethod);
    }

    return (
        <OrderDataContext.Provider value={{
            products,
            shoppingCart,
            address,
            total,
            paymentMethod,
            shippingMethod,
            SetProducts,
            SetShoppingCart,
            SetAddress,
            SetTotal,
            SetPaymentMethod,
            SetShippingMethod
        }}>
            {children}
        </OrderDataContext.Provider>
    )
}