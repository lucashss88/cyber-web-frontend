import { useState, useEffect } from "react"
import Location from "../assets/images/checkout/Location.svg"
import Payment from "../assets/images/checkout/Payment.svg"
import Shippment from "../assets/images/checkout/Shipping.svg"
import AddressCheckoutPage from "../components/Checkout/AddressCheckoutPage"
import ShippingCheckoutPage from "../components/Checkout/ShippingCheckoutPage"
import PaymentCheckoutPage from "../components/Checkout/PaymentCheckoutPage"

const CheckoutPage = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const steps = [
    {
      step: 'Step 1',
      title: 'Address',
      content: <AddressCheckoutPage />,
      icon: Location
    },
    {
      step: 'Step 2',
      title: 'Shipping',
      content: <ShippingCheckoutPage />,
      icon: Shippment
    }, 
    {
      step: 'Step 3',
      title: 'Payment',
      content: <PaymentCheckoutPage />,
      icon: Payment
    }
  ]

  const handleNextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  }

  const handlePreviousStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-10 p-4 w-full md:pt-10">
      <div className="md:w-full">
        <div className="flex flex-row gap-10 md:pl-1 md:pr-20">
          {isMobile ? (
            <div className="w-full flex flex-row justify-between">
              {steps.slice(stepIndex, stepIndex + 2).map((step, index) => (
                <div key={stepIndex + index} className="flex flex-col gap-1 justify-between py-4 m-auto">
                  <div className="flex items-center gap-2">
                    <img src={step.icon} alt={step.title} className="w-7 h-7" />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold">{step.step}</p>
                      <p className="text-lg font-semibold">{step.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            steps.map((step, index) => (
              <div key={stepIndex + index} className="flex flex-col gap-1 justify-between py-4 m-auto">
                <div className="flex items-center gap-2">
                  <img src={step.icon} alt={step.title} className="w-7 h-7" />
                  <div className="flex flex-col">
                     <p className="text-sm font-semibold">{step.step}</p>
                    <p className="text-lg font-semibold">{step.title}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col gap-2 py-13 md:pl-35 md:pr-55 md:mt-12">
          {steps[stepIndex].content}
          <div className="flex items-center w-full justify-between md:flex md:justify-end md:gap-5">
            <button className="bg-white border-2 border-black-500 text-black px-13 py-4 rounded-lg w-40" onClick={() => handlePreviousStep()}>Back</button>
            <button className="bg-black text-white px-13 py-4 rounded-lg w-40" onClick={() => handleNextStep()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;