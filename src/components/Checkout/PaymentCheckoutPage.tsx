import { useEffect, useState } from "react"
import CreditCard from "../../assets/images/checkout/Credit Card.svg"
import type { LocalProduct } from "../../contexts/ShoppingCartContext";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useOrderData } from "../../hooks/useOrderData";
import OrderSummary from "./OrderSummary";
import type { Payment } from "../../types/payment";

interface PaymentCheckoutPageProps {
  onComplete: (isComplete: boolean) => void;
}

const PaymentCheckoutPage = ({ onComplete }: PaymentCheckoutPageProps) => {
  const [selectedMethod, setSelectedMethod] = useState<number>(1);
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expDate, setExpDate] = useState<string>("");
  const [cvv, setCvv] = useState<number | null>(null);
  const { subTotalPrice, estimatedTax, estimatedShipping, totalPrice } = useShoppingCart();
  const { address, shippingMethod, SetPaymentMethod } = useOrderData();

  const cardHolderRegex = /^[a-zA-Z\s]{2,50}$/; 
  const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^\d{3,4}$/;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const methods: Payment[] = [
    { id: 1, name: "Credit Card", cardHolder: cardHolder, cardNumber: cardNumber, expDate: expDate, cvv: cvv},
    { id: 2, name: "PayPal", cardHolder: null, cardNumber: null, expDate: null, cvv: null },
    { id: 3, name: "PayPal Credit", cardHolder: null, cardNumber: null, expDate: null, cvv: null }
  ];

  useEffect(() => {
    const storedProducts = localStorage.getItem("shoppingCart");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [])

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const isPaymentComplete = selectedMethod === 1 
      ? cardHolderRegex.test(cardHolder) && 
        expDateRegex.test(expDate) && 
        cvv !== null && cvvRegex.test(cvv.toString())
      : selectedMethod > 1;
    
    if (isPaymentComplete) {
      const paymentData: Payment = {
        id: selectedMethod,
        name: methods.find(m => m.id === selectedMethod)?.name || '',
        cardHolder: selectedMethod === 1 ? cardHolder : null,
        cardNumber: selectedMethod === 1 ? cardNumber : null,
        expDate: selectedMethod === 1 ? expDate : null,
        cvv: selectedMethod === 1 ? cvv : null
      };
      SetPaymentMethod(paymentData);
      onComplete(true);
    } else {
      onComplete(false);
    }
  }, [selectedMethod, cardHolder, cardNumber, expDate, cvv, onComplete, SetPaymentMethod, methods]);

  return (
    <div className="mb-12 pr-4">
      <div className="flex flex-col gap-2 mb-10 p-5 border-1 border-zinc-300 rounded-xl">
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
      <h1 className="text-2xl font-bold mb-5">Payment</h1>
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-row justify-between">
          {methods.map((method) => (
          <div key={method.id}>
             <h2 className={`text-md font-medium ${method.id === selectedMethod ? 'text-black border-b-2 border-black' : 'text-gray-500'}`} onClick={() => {
               setSelectedMethod(method.id);
             }}>{method.name}</h2>
          </div>
        ))}
        </div>
        <div className="flex flex-col gap-2">
          <img src={CreditCard} className="my-10"></img>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              onChange={(e) => setCardHolder(e.target.value)}
              className="flex-1 p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Card Number"
              onChange={(e) => setCardNumber(e.target.value)}
              className="flex-1 p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Exp.Date"
                onChange={(e) => setExpDate(e.target.value)}
                className="flex-1 p-4 w-1/2 border border-gray-300 rounded-lg placeholder:text-gray-400"
                required
              />
                <input
                type="text"
                placeholder="CVV"
                onChange={(e) => setCvv(Number(e.target.value))}
                className="flex-1 w-1/2 p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <input type="checkbox" className="w-4 h-4 appearance-none border-2 border-gray-300 rounded bg-white checked:bg-black checked:border-black checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center checked:after:items-center checked:after:h-full" defaultChecked/>
        <h2 className="text-md font-semibol">Same as billing address</h2>
      </div>
    </div>
  )
}

export default PaymentCheckoutPage