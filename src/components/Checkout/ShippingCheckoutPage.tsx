import { useState, useEffect } from "react";
import type { Shipping } from "../../types/shipping";
import { useOrderData } from "../../hooks/useOrderData";

interface ShippingCheckoutPageProps {
  onComplete: (isComplete: boolean) => void;
}

const ShippingCheckoutPage = ({ onComplete }: ShippingCheckoutPageProps) => {
  const [selectedShipping, setSelectedShipping] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const {shippingMethod, SetShippingMethod} = useOrderData();
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  const shippingOptions: Shipping[] = [
    {
      id: 1,
      description: "Regulary shipment",
      duration: "17 Oct, 2023",
      cost: "Free"
    },
    {
      id: 2,
      description: "Get your delivery as soon as possible",
      duration: "1 Oct, 2023",
      cost: "$8.50"
    },
    {
      id: 3,
      description: "Pick a date when you want to get your delivery",
      cost: "Schedule"
    }
  ]

  useEffect(() => {
    if (selectedShipping) {
      const selected = shippingOptions.find((option) => option.id === selectedShipping);
      if (selected) {
        SetShippingMethod(selected);
      }
    }
  }, [selectedShipping])

  useEffect(() => {
    if (shippingMethod) {
      setSelectedShipping(shippingMethod.id);
    }
  }, [shippingMethod])

  return (
    <div className="mb-12">
      <h1 className="text-2xl font-bold mb-10">Select Address</h1>
      <div className="flex flex-col gap-6 mb-10">
        {shippingOptions.map((option) => (
          <div key={option.id} className={` rounded-lg p-6 flex flex-col gap-4 cursor-pointer border-1  ${
            selectedShipping === option.id ? 'border-black' : 'border-gray-400 opacity-40'
          }`} onClick={() => {
            setSelectedShipping(option.id);
            onComplete(true);
          }}>
            <div className="flex justify-between items-center">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-5 w-full">
                <input
                  type="radio"
                  name="shipping"
                  className="lg:w-5.5 w-5 h-5 appearance-none border-2 border-black rounded-full bg-white checked:bg-black  checked:border-4 checked:border-white checked:ring-2 checked:ring-black cursor-pointer"
                  checked={selectedShipping === option.id}
                  defaultChecked={option.id === 1}
                  onChange={() => setSelectedShipping(option.id)}
                />
                {isMobile ? (
                  <>
                    <div className="w-full flex flex-row justify-between">
                      <span className="text-lg font-semibold">{option.cost}</span>
                      {option.duration && (
                        <span className="ml-5 inline-block text-normal font-medium px-2 py-1 rounded">{option.duration}</span>
                      )}
                    </div>
                    <span className="text-lg font-normal">{option.description}</span>
                  </>
                ) : (
                  <>
                    <div className="w-full flex flex-row gap-4">
                      <span className="text-lg font-semibold">{option.cost}</span>
                      <span className="text-lg font-normal">{option.description}</span>
                    </div>
                    {option.duration && (
                        <span className="ml-5 inline-block text-normal font-medium px-2 py-1 rounded">{option.duration}</span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShippingCheckoutPage