import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Address } from '../../types/address';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const orderDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [address, setAddress] = useState<Address | null>(null)

  useEffect(() => {
    const savedAddress = localStorage.getItem('selectedAddress')
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress))
    }
    const savedTotalValue = localStorage.getItem('totalValue')
    if (savedTotalValue) {
      setTotalPrice(parseFloat(savedTotalValue))
    }
  }, [])

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed. We appreciate your business and look forward to serving you again in the future.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Order Number</p>
            <p className="font-semibold">#{orderNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Date</p>
            <p className="font-semibold">{orderDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total</p>
            <p className="font-semibold">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-3">Address</h3>
        <div className="text-gray-700">
          {address ? (
            <>
              <p>{address.streetAddress}, {address.number}</p>
              <p>{address.city}, {address.postalCode}</p>
              <p>{address.country}</p>
            </>
          ) : (
            <p>Endereço não encontrado</p>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleContinueShopping}
          className="flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Continue to shop
        </button>
        <button className="flex-1 border border-black text-black py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
          Track order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;