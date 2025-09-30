import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import type { Address } from "../../types/address";
import { useForm } from "react-hook-form";

interface AddressFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (address: Address) => void;
  address?: Address;
}

interface AddressFormData {
  country: string;
  city: string;
  streetAddress: string;
  postalCode: string;
  number: string;
  tag: string;
}

const AddressForm = ({ isOpen, onClose, onSave, address }: AddressFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AddressFormData>({
    defaultValues: {
      country: "",
      city: "",
      streetAddress: "",
      postalCode: "",
      number: "",
      tag: ""
    }
  });

  useEffect(() => {
    if (address) {
      reset({
        country: address.country,
        city: address.city,
        streetAddress: address.streetAddress,
        postalCode: address.postalCode,
        number: address.number,
        tag: address.tag
      });
    } else {
      reset({
        country: "",
        city: "",
        streetAddress: "",
        postalCode: "",
        number: "",
        tag: ""
      });
    }
  }, [address, reset]);

  const onSubmit = (data: AddressFormData) => {
    const newAddress: Address = {
      ...data,
      id: address?.id || Date.now()
    };
    onSave(newAddress);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{address ? 'Edit Address' : 'Add New Address'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <FiX size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Country"
              {...register("country", { required: "Country is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
          </div>
          
          <div>
            <input
              type="text"
              placeholder="City"
              {...register("city", { required: "City is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Street Address"
              {...register("streetAddress", { required: "Street address is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.streetAddress && <span className="text-red-500 text-sm">{errors.streetAddress.message}</span>}
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Number"
              {...register("number", { required: "Number is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.number && <span className="text-red-500 text-sm">{errors.number.message}</span>}
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Postal Code"
              {...register("postalCode", { required: "Postal code is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode.message}</span>}
          </div>
          
          <div>
            <input
              type="text"
              placeholder="Tag (home, work, office)"
              {...register("tag", { required: "Tag is required" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.tag && <span className="text-red-500 text-sm">{errors.tag.message}</span>}
          </div>
          
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