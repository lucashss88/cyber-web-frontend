import { useEffect, useState } from "react"
import CreditCard from "../../assets/images/checkout/Credit Card.svg"
import type { LocalProduct } from "../../contexts/ShoppingCartContext";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useOrderData } from "../../hooks/useOrderData";

interface PaymentCheckoutPageProps {
  onComplete: (isComplete: boolean) => void;
}

const PaymentCheckoutPage = ({ onComplete }: PaymentCheckoutPageProps) => {
  const methods = [
    { id: 1, name: "Credit Card" },
    { id: 2, name: "PayPal" },
    { id: 3, name: "PayPal Credit" }
  ];

  const [selectedMethod, setSelectedMethod] = useState<number>(1);
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const { subTotalPrice, estimatedTax, estimatedShipping, totalPrice } = useShoppingCart();
  const { address, shippingMethod } = useOrderData();

  useEffect(() => {
    const storedProducts = localStorage.getItem("shoppingCart");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [])

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
          <div>
            <div className=" flex flex-col mt-3 mb-6 gap-4"> 
              <h2 className="text-medium text-gray-600">Address</h2>
              <p className="text-md font-normal">{address?.streetAddress}, {address?.city}</p>
            </div>
            <div className=" flex flex-col mt-3 gap-1"> 
              <h2 className="text-medium text-gray-600">Shipment method</h2>
              <p className="text-md font-normal">{shippingMethod.cost}</p>
            </div>
            <div className="flex flex-col pt-4">
              <div className="mb-2">
              <div className="flex justify-between w-full mb-2">
                <p className="text-lg font-semibold mt-5">Subtotal</p>
                <p className="text-lg font-medium mt-5">${subTotalPrice}</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-lg font-normal mt-5">Estimated Tax</p>
                <p className="text-lg font-medium mt-5">${estimatedTax}</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-lg font-normal mt-5">Estimated shipping & Handling</p>
                <p className="text-lg font-medium mt-5">${estimatedShipping}</p>
              </div>
              <div className="flex justify-between w-full">
                <p className="text-lg font-semibold mt-5">Total</p>
                <p className="text-lg font-medium mt-5">${totalPrice}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-5">Payment</h1>
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex flex-row justify-between">
          {methods.map((method) => (
          <div key={method.id}>
             <h2 className={`text-md font-medium ${method.id === selectedMethod ? 'text-black border-b-2 border-black' : 'text-gray-500'}`} onClick={() => {
               setSelectedMethod(method.id);
               onComplete(true);
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
              className="flex-1 p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Card Number"
              className="flex-1 p-4 border border-gray-300 rounded-lg placeholder:text-gray-400"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Exp.Date"
                className="flex-1 p-4 w-1/2 border border-gray-300 rounded-lg placeholder:text-gray-400"
                required
              />
                <input
                type="text"
                placeholder="CVV"
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