import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import Edit from "../../assets/images/checkout/Subtract.svg";
import Add from "../../assets/images/checkout/Add New Line.svg";
import AddressForm from "./AddressForm";
import type { Address } from "../../types/address";
import { useOrderData } from "../../hooks/useOrderData";
import NotificationToast from "../productDetailsPage/mainInfo/NotificationToast";
import { defaultAddresses } from "../../data/defaultAddresses";

interface AddressCheckoutPageProps {
  onComplete: (isComplete: boolean) => void;
}

const AddressCheckoutPage = ({ onComplete }: AddressCheckoutPageProps) => {
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const { SetAddress, address } = useOrderData();
  const [addresses, setAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const storedAddresses = localStorage.getItem('userAddresses');
    if (storedAddresses) {
      setAddresses(JSON.parse(storedAddresses));
    } else {
      setAddresses(defaultAddresses);
      localStorage.setItem('userAddresses', JSON.stringify(defaultAddresses));
    }
  }, []);

  useEffect(() => {
    if (selectedAddress !== null) {
      const address = addresses.find(addr => addr.id === selectedAddress);
      if (address) {
        SetAddress(address);
        localStorage.setItem('selectedAddress', JSON.stringify(address));
      }
    }
  }, [selectedAddress])

  useEffect(() => {
    if (address) {
      setSelectedAddress(address.id);
    }
  }, [address])

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDeleteAddress = (id: number) => {
    const updatedAddresses = addresses.filter(addr => addr.id !== id);
    setAddresses(updatedAddresses);
    localStorage.setItem('userAddresses', JSON.stringify(updatedAddresses));
    if (selectedAddress === id) {
      setSelectedAddress(null);
    }
    setToastMessage("Address deleted successfully");
  };

  const handleSaveAddress = (address: Address) => {
    let updatedAddresses;
    if (editingAddress) {
      updatedAddresses = addresses.map(addr => 
        addr.id === editingAddress.id ? address : addr
      );
      setToastMessage("Address updated successfully");
    } else {
      const newAddress = { ...address, id: Date.now() };
      updatedAddresses = [...addresses, newAddress];
      setToastMessage("Address added successfully");
    }
    setAddresses(updatedAddresses);
    localStorage.setItem('userAddresses', JSON.stringify(updatedAddresses));
  };

  return (
    <div className="mb-12">
      <h1 className="text-2xl font-bold mb-10">Select Address</h1>
      <div className="flex flex-col gap-6 mb-10">
        {addresses.map((addr) => (
          <div key={addr.id} className={`bg-gray-100 rounded-lg p-6 flex flex-col gap-4 cursor-pointer border-2 ${
            selectedAddress === addr.id ? 'border-black' : 'border-transparent'
          }`} onClick={() => {
            setSelectedAddress(addr.id);
            onComplete(true);
          }}>
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

      {toastMessage && (
          <NotificationToast 
            message={toastMessage} 
            onClose={() => setToastMessage(null)} 
          />
      )}
    </div>
  );
}

export default AddressCheckoutPage;