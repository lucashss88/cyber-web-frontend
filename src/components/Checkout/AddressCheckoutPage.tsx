import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import Edit from "../../assets/images/checkout/Subtract.svg";
import Add from "../../assets/images/checkout/Add New Line.svg";
import AddressForm from "./AddressForm";
import type { Address } from "../../types/address";
import { useOrderData } from "../../hooks/useOrderData";

const AddressCheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | undefined>(undefined);
  const { SetAddress } = useOrderData();
  const [addresses, setAddresses] = useState<Address[]>([
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
  ]);

  useEffect(() => {
    if (selectedAddress !== null) {
      const address = addresses.find(addr => addr.id === selectedAddress);
      if (address) {
        SetAddress(address);
        console.log("Selected address:", address);
      }
    }
  }, [selectedAddress])

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSaveAddress = (address: Address) => {
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id ? address : addr
      ));
    } else {
      const newAddress = { ...address, id: Date.now() };
      setAddresses([...addresses, newAddress]);
    }
  };

  return (
    <div className="mb-12">
      <h1 className="text-2xl font-bold mb-10">Select Address</h1>
      <div className="flex flex-col gap-6 mb-10">
        {addresses.map((addr) => (
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
                  className="w-5 h-5 appearance-none border-2 border-black rounded-full bg-white checked:bg-black  checked:border-4 checked:border-white checked:ring-2 checked:ring-black cursor-pointer"
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
                <button className="hover:underline" onClick={() => {
                  setEditingAddress(addr);
                  console.log("Form data:", addr)
                  setIsModalOpen(true);
                }}>
                  <img src={Edit} alt="Edit" /></button>
                <button className="hover:underline text-xl" onClick={() => handleDeleteAddress(addr.id)}><FiX /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-center justify-center items-center">
        <button onClick={() => {
          setEditingAddress(undefined);
          setIsModalOpen(true);
        }} className="text-2xl"><img src={Add} alt="Add" /></button>
        <p className="text-md ml-2">Add New Address</p>
      </div>
      
      <AddressForm
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAddress(undefined);
        }}
        address={editingAddress}
        onSave={handleSaveAddress}
      />
    </div>
  );
}

export default AddressCheckoutPage;