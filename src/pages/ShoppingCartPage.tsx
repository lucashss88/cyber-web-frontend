import {useEffect, useState, useMemo} from 'react'
import { FiX, FiPlus, FiMinus } from 'react-icons/fi'

type Product = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    url_image: string;
    code: string;
}

const ShoppingCartPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const estimatedTax = 50;
    const estimatedShipping = 29;

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            const parsed = JSON.parse(storedCart);
            setProducts(Array.isArray(parsed) ? parsed : [parsed]);
        }
    }, []);

    const subTotalPrice = useMemo(() => {
        return products.reduce((total: number, product: Product) => total + (product.price * product.quantity), 0);
    }, [products]);

    const totalPrice = useMemo(() => {
        return subTotalPrice + estimatedTax + estimatedShipping;
    }, [subTotalPrice]);

    const handleRemoveFromCart = (productId: string) => {
        const updatedCart = products.filter(product => product.id !== productId);
        setProducts(updatedCart);
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    };

    const handleQuantityPlus = (productId: string) => {
        const updatedCart = products.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity + 1 };
            }
            return product;
        });
        setProducts(updatedCart);
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    };

    const handleQuantityMinus = (productId: string) => {
        const product = products.find(p => p.id === productId);
        if (product && product.quantity === 1) {
            handleRemoveFromCart(productId);
            return;
        }
        const updatedCart = products.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setProducts(updatedCart);
        localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    };

    return (
      <div className="container my-5 md:mx-40 md:my-30 p-4 md:flex md:flex-row flex flex-col gap-3">
        <div>
          <h1 className="text-2xl font-bold mb-10">Shopping Cart</h1>
          {products.map((product, index) => (
            <div key={index} className="flex items-center justify-between mb-4 py-5 w-full border-b-d4 border-b-1">
              <div className="flex items-center">
                <img src={product.url_image} alt={product.name} className="w-20 h-20 object-contain mr-4" />
                <div className="flex flex-col w-full gap-1">
                  <p className="text-lg font-semibold">{product.name}</p>
                  <p className="text-gray-600">#{product.code}</p>
                  <div className="flex flex-row justify-between w-60 gap-3">
                    <button className="text-black hover:text-5d" onClick={() => handleQuantityMinus(product.id)}><FiMinus></FiMinus></button>
                    <p className="text-gray-600">{product.quantity}</p>
                    <button className=" text-black hover:text-5d" onClick={() => handleQuantityPlus(product.id)}><FiPlus></FiPlus></button>
                    <p className="text-lg font-semibold">${product.price}</p>
                    <button className=" text-black hover:text-5d" onClick={() => handleRemoveFromCart(product.id)}><FiX></FiX></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.length === 0 && <p>Your cart is empty.</p>}
        </div>
        <div className="py-10 px-2 mb-5">
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
          <button className="mt-10 w-full bg-black text-white py-4 rounded hover:bg-5d transition duration-300">Checkout</button>
        </div>
      </div>
    );
}

export default ShoppingCartPage;