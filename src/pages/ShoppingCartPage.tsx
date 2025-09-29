import { FiX, FiPlus, FiMinus } from 'react-icons/fi'
import NotificationToast from '../components/productDetailsPage/mainInfo/NotificationToast'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useRef } from 'react'

const ShoppingCartPage = () => {
    const {
        localProducts,
        subTotalPrice,
        totalPrice,
        handleRemoveFromCart,
        handleQuantityPlus,
        handleQuantityMinus,
        toastMessage,
        setToastMessage,
        addProducts
    } = useShoppingCart()

    const { isSignedIn, userId } = useAuth()
    const hasSynced = useRef(false)
    
    const estimatedTax = 50
    const estimatedShipping = 29

    useEffect(() => {
      if (isSignedIn && localProducts.length > 0 && userId && !hasSynced.current) {
        const products = localProducts.map(product => ({
          product_id: parseInt(product.id),
          quantity: product.quantity
        }))
        addProducts(products)
        hasSynced.current = true
      }
    }, [isSignedIn, localProducts, userId])

    return (
      <>
        <div className="my-5 md:my-0 md:px-20 md:py-10 lg:pl-47 lg:pr-67 lg:py-30 p-4 md:p-0 md:flex md:flex-row flex flex-col gap-5 md:gap-4 lg:gap-10 md:justify-between md:m-auto">
          <div className="md:w-1/2 lg:w-5/5">
            <h1 className="text-2xl font-bold mb-10">Shopping Cart</h1>
            {localProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between mb-4 py-5 border-b-d4 border-b-1">
                <div className="flex items-center">
                  <img src={product.url_image} alt={product.name} className="w-20 h-20 object-contain mr-4" />
                  <div className="flex flex-col md:flex-row w-full gap-1 md:justify-normal">
                    <div>
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-gray-600">#{product.code}</p>
                    </div>
                    <div className="flex flex-row justify-between w-60 gap-3 md:items-center md:ml-5">
                      <button className="text-black hover:text-5d" onClick={() => handleQuantityMinus(product.id)}><FiMinus></FiMinus></button>
                      <p className="text-gray-600">{product.quantity}</p>
                      <button className=" text-black hover:text-5d" onClick={() => handleQuantityPlus(product.id)}><FiPlus></FiPlus></button>
                      <p className="text-lg font-semibold">${product.price}</p>
                      <button className=" text-dark-gray hover:text-5d text-2xl" onClick={() => handleRemoveFromCart(product.id)}><FiX></FiX></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {localProducts.length === 0 && (
              <div className="flex flex-col items-center justify-center">
                <p>Your cart is empty.</p>
                <button className="mt-4 px-8 py-3 bg-black text-white rounded hover:bg-5d transition duration-300" onClick={() => window.location.href = '/products_page'}>Shop now</button>
              </div>
            )}
          </div>
          <div className="py-10 px-4 mb-5 lg:py-12 lg:px-12 lg:mb-0 border-1 border-zinc-300 rounded-xl w-full md:w-4/5">
            <h1 className="text-2xl font-bold mb-5">Order Summary</h1>
            <div className="flex flex-col gap-6 mb-2">
              <div>
                <p className="text-gray-400">Discount code / Promo code</p>
                <input className="px-4 py-4 border-1 border-zinc-300 rounded-xl w-full" placeholder='Code'></input>
              </div>
              <div>
                <p className="text-gray-400">Your bonus card Number</p>
                <div className="relative">
                  <input className="px-4 py-4 pr-20 border-1 border-zinc-300 rounded-xl w-full" placeholder='Enter Card Number'></input>
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 mr-1 text-sm border border-black rounded">Apply</button>
                </div>
              </div>
            </div>
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
            <button className="mt-10 w-full bg-black text-white py-4 rounded hover:bg-5d transition duration-300" onClick={() => window.location.href = '/checkout'}>Checkout</button>
          </div>
        </div>

        {toastMessage && (
          <NotificationToast 
            message={toastMessage} 
            onClose={() => setToastMessage(null)} 
          />
        )}
      </>
    );
}

export default ShoppingCartPage;