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

    useEffect(() => {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            const parsed = JSON.parse(storedCart);
            setProducts(Array.isArray(parsed) ? parsed : [parsed]);
        }
    }, []);

    const totalPrice = useMemo(() => {
        return products.reduce((total: number, product: Product) => total + (product.price * product.quantity), 0);
    }, [products]);

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
      <div className="container my-5 md:mx-40 md:my-30 p-4 md:flex md:flex-row">
        <div className="">
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
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Total</h1>
          <p className="text-lg font-semibold">Total Price: ${totalPrice}</p>
        </div>
      </div>
    );
}

export default ShoppingCartPage;