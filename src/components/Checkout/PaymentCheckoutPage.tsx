import { useEffect, useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import CreditCard from "../../assets/images/checkout/Credit Card.svg"
import type { LocalProduct } from "../../contexts/ShoppingCartContext";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useOrderData } from "../../hooks/useOrderData";
import OrderSummary from "./OrderSummary";
import type { Payment } from "../../types/payment";

const paymentMethods = [
  { id: 1, name: "Credit Card" },
  { id: 2, name: "PayPal" },
  { id: 3, name: "PayPal Credit" }
];

interface PaymentFormData {
  cardHolder: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

interface PaymentCheckoutPageProps {
  onComplete: (isComplete: boolean) => void;
}

const PaymentCheckoutPage = ({ onComplete }: PaymentCheckoutPageProps) => {
  const [selectedMethod, setSelectedMethod] = useState<number>(1);
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const { subTotalPrice, estimatedTax, estimatedShipping, totalPrice } = useShoppingCart();
  const { address, shippingMethod, SetPaymentMethod } = useOrderData();
  
  const { register, watch, formState: { errors, isValid } } = useForm<PaymentFormData>({
    mode: "onChange",
    defaultValues: {
      cardHolder: "",
      cardNumber: "",
      expDate: "",
      cvv: ""
    }
  });
  
  const cardHolder = watch("cardHolder");
  const cardNumber = watch("cardNumber");
  const expDate = watch("expDate");
  const cvv = watch("cvv");

  useEffect(() => {
    const storedProducts = localStorage.getItem("shoppingCart");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [])

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePaymentValidation = useCallback(() => {
    const isPaymentComplete = selectedMethod === 1 ? isValid : selectedMethod > 1;
    
    if (isPaymentComplete) {
      const paymentData: Payment = {
        id: selectedMethod,
        name: paymentMethods.find(m => m.id === selectedMethod)?.name || '',
        cardHolder: selectedMethod === 1 ? cardHolder : null,
        cardNumber: selectedMethod === 1 ? cardNumber : null,
        expDate: selectedMethod === 1 ? expDate : null,
        cvv: selectedMethod === 1 ? parseInt(cvv) || null : null
      };
      SetPaymentMethod(paymentData);
      onComplete(true);
    } else {
      onComplete(false);
    }
  }, [selectedMethod, isValid, cardHolder, cardNumber, expDate, cvv, onComplete, SetPaymentMethod]);

  useEffect(() => {
    handlePaymentValidation();
  }, [handlePaymentValidation]);

  return (
    <div className="mb-2 pr-1 lg:flex lg:flex-row lg:gap-30 md:p-0">
      <div className="flex flex-col gap-2 mb-10 p-5 lg:pt-6 border-1 border-zinc-300 rounded-xl lg:w-1/2">
        <h1 className="text-2xl font-medium mb-5">Summary</h1>
        <div className="flex flex-col">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between mb-4 py-4 w-full bg-gray-100 px-5 rounded-xl">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center">
                  <img src={product.url_image} alt={product.name} className="w-10 h-10 object-contain mr-4" />
                  <p className="text-md font-medium">{product.name}</p>
                </div>
                <p className="font-bold">${product.price}</p>
              </div>
            </div>
          ))}
          <OrderSummary
            address={address}
            shippingMethod={shippingMethod}
            subTotalPrice={subTotalPrice}
            estimatedTax={estimatedTax}
            estimatedShipping={estimatedShipping}
            totalPrice={totalPrice}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-10 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-5">Payment</h1>
        <div className="flex flex-row justify-between">
          {paymentMethods.map((method) => (
          <div key={method.id}>
             <h2 className={`text-md font-medium ${method.id === selectedMethod ? 'text-black border-b-2 border-black' : 'text-gray-500'}`} onClick={() => {
               setSelectedMethod(method.id);
             }}>{method.name}</h2>
          </div>
        ))}
        </div>
        <div className="flex flex-col gap-2">
          <img src={CreditCard} className="my-10"></img>
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Cardholder Name"
                {...register("cardHolder", {
                  required: "Cardholder name is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Only letters and spaces allowed"
                  },
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })}
                className="p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
              />
              {errors.cardHolder && <span className="text-red-500 text-xs">{errors.cardHolder.message}</span>}
            </div>
            
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Card Number"
                {...register("cardNumber", {
                  required: "Card number is required",
                  pattern: {
                    value: /^\d{16}$/,
                    message: "Card number must be exactly 16 digits"
                  }
                })}
                className="p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
                maxLength={16}
              />
              {errors.cardNumber && <span className="text-red-500 text-xs">{errors.cardNumber.message}</span>}
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Exp.Date"
                  {...register("expDate", {
                    required: "Expiration date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Format must be MM/YY"
                    }
                  })}
                  className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
                  maxLength={5}
                />
                {errors.expDate && <span className="text-red-500 text-xs">{errors.expDate.message}</span>}
              </div>
              
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="CVV"
                  {...register("cvv", {
                    required: "CVV is required",
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: "CVV must be 3 or 4 digits"
                    }
                  })}
                  className="w-full p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
                  maxLength={4}
                />
                {errors.cvv && <span className="text-red-500 text-xs">{errors.cvv.message}</span>}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input type="checkbox" className="w-4 h-4 appearance-none border-2 border-gray-300 rounded bg-white checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center checked:after:h-full" defaultChecked/>
            <h2 className="text-md font-semibol">Same as billing address</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PaymentCheckoutPage