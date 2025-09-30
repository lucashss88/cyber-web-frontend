import type { Address } from "../../types/address";
import type { Shipping } from "../../types/shipping";

interface OrderSummaryProps {
  address?: Address;
  shippingMethod?: Shipping;
  subTotalPrice: number;
  estimatedTax: number;
  estimatedShipping: number;
  totalPrice: number;
}

const OrderSummary = ({ 
  address, 
  shippingMethod, 
  subTotalPrice, 
  estimatedTax, 
  estimatedShipping, 
  totalPrice 
}: OrderSummaryProps) => {
  return (
    <div>
      <div className=" flex flex-col mt-3 mb-6 gap-4"> 
        <h2 className="text-medium text-gray-600">Address</h2>
        <p className="text-md font-normal">{address?.streetAddress}, {address?.city}</p>
      </div>
      <div className=" flex flex-col mt-3 gap-1"> 
        <h2 className="text-medium text-gray-600">Shipment method</h2>
        <p className="text-md font-normal">{shippingMethod?.cost}</p>
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
  );
};

export default OrderSummary;