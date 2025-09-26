import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import type { Address } from "../../types/address";

interface AddressFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (address: Address) => void;
  address?: Address;
}

const AddressForm = ({ isOpen, onClose, onSave, address }: AddressFormProps) => {
  const [formData, setFormData] = useState<Partial<Address>>({
    country: address?.country || "",
    city: address?.city || "",
    streetAddress: address?.streetAddress || "",
    postalCode: address?.postalCode || "",
    number: address?.number || "",
    tag: address?.tag || ""
  });

  useEffect(() => {
    if (address) {
      setFormData({
        country: address.country,
        city: address.city,
        streetAddress: address.streetAddress,
        postalCode: address.postalCode,
        number: address.number,
        tag: address.tag
      });
    } else {
      setFormData({
        country: "",
        city: "",
        streetAddress: "",
        postalCode: "",
        number: "",
        tag: ""
      });
    }
  }, [address])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress: Address = {
      ...formData as Address,
      id: address?.id || Date.now()
    };
    onSave(newAddress);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{address ? 'Edit Address' : 'Add New Address'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <FiX size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="text"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="text"
            placeholder="Number"
            value={formData.number}
            onChange={(e) => setFormData({...formData, number: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="text"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <input
            type="text"
            placeholder="Tag (home, work, office)"
            value={formData.tag}
            onChange={(e) => setFormData({...formData, tag: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              {address ? 'Update' : 'Add'} Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;