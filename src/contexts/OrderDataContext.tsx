import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Address } from "../types/address";
import type { Shipping } from "../types/shipping";
import type { Payment } from "../types/payment";

interface OrderDataContextType {
    address: Address,
    total: number,
    paymentMethod: Payment,
    shippingMethod: Shipping,
    SetAddress: (address: Address) => void,
    SetTotal: (total: number) => void,
    SetPaymentMethod: (paymentMethod: Payment) => void,
    SetShippingMethod: (shippingMethod: Shipping) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const OrderDataContext = createContext<OrderDataContextType | undefined>(undefined);

export function OrderDataProvider({ children }: { children: ReactNode }) {
    const [address, setAddress] = useState<Address>({} as Address);
    const [total, setTotal] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState<Payment>({} as Payment);
    const [shippingMethod, setShippingMethod] = useState<Shipping>({} as Shipping);
    const SetAddress = (address: Address) => {
        setAddress(address);
    }

    const SetTotal = (total: number) => {
        setTotal(total);
    }

    const SetPaymentMethod = (paymentMethod: Payment) => {
        setPaymentMethod(paymentMethod);
    }

    const SetShippingMethod = (shippingMethod: Shipping) => {
        setShippingMethod(shippingMethod);
    }

    return (
        <OrderDataContext.Provider value={{      
            address: address,
            total,
            paymentMethod: paymentMethod,
            shippingMethod: shippingMethod,
            SetAddress,
            SetTotal,
            SetPaymentMethod,
            SetShippingMethod,
        }}>
            {children}
        </OrderDataContext.Provider>
    )
}