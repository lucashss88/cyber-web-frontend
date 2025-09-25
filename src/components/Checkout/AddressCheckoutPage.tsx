import { useState } from "react";
import { FiX } from "react-icons/fi";
import Edit from "../../assets/images/checkout/Subtract.svg";
import Add from "../../assets/images/checkout/Add New Line.svg";

interface Address {
  id: number;
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  number: string;
  tag: string;
}

const AddressCheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  
  const address: Address[] = [
    {
      id: 1,
      country: "United States",
      city: "New York",
      streetAddress: "123 Main St",
      postalCode: "10001",
      number: "123",
      tag: "work"
    },
    {
      id: 2,
      country: "Canada",
      city: "Toronto",
      streetAddress: "456 Queen St",
      postalCode: "M5V 2A1",
      number: "456",
      tag: "home"
    },
    {
      id: 3,
      country: "United Kingdom",
      city: "London",
      streetAddress: "789 High St",
      postalCode: "SW1A 1AA",
      number: "789",
      tag: "office"
    },
  ];

  return (
    <div className="mb-12">
      <h1 className="text-2xl font-bold mb-10">Select Address</h1>
      <div className="flex flex-col gap-6 mb-10">
        {address.map((addr) => (
          <div key={addr.id} className={`bg-gray-100 rounded-lg p-6 flex flex-col gap-4 cursor-pointer border-2 ${
            selectedAddress === addr.id ? 'border-black' : 'border-transparent'
          }`} onClick={() => setSelectedAddress(addr.id)}>
            <div className="flex justify-between items-center">
              <div className="flex items-start gap-3">
                <input 
                  type="radio" 
                  name="address" 
                  checked={selectedAddress === addr.id}
                  onChange={() => setSelectedAddress(addr.id)}
                  className="w-4 h-4"
                />
                <div>
                  <div>
                    <span className="text-lg font-normal">{addr.country}</span>
                    <span className="ml-5 inline-block bg-black text-white text-xs font-light px-2 py-1 rounded">{addr.tag.toLocaleUpperCase()}</span>
                  </div>
                  <p className="text-gray-600">{addr.streetAddress}, {addr.number}</p>
                  <p className="text-gray-600">{addr.city}, {addr.country}</p>
                  <p className="text-gray-600">{addr.postalCode}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <button className="hover:underline"><img src={Edit} alt="Edit" /></button>
                <button className="hover:underline text-xl"><FiX /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-center justify-center items-center">
        <button className="text-2xl"><img src={Add}></img></button>
        <p className="text-md ml-2">Add New Address</p>
      </div>
    </div>
  );
}

export default AddressCheckoutPage;