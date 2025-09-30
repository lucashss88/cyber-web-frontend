import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { OrderDataProvider } from './contexts/OrderDataContext';
import ProtectedRoute from './components/ProtectedRoute';
import OrderConfirmationPage from './components/Checkout/OrderConfirmationPage';
 
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            <ShoppingCartProvider>
              <Routes>
                <Route path='/products_page' element={<ProductsPage />} />
                <Route path='/products_page/:categoryName' element={<ProductsPage />} />
                <Route path='/product/:productId' element={<ProductDetailsPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/shopping_cart' element={<ShoppingCartPage />} />
                <Route path='/checkout' element={
                  <ProtectedRoute>
                    <OrderDataProvider>
                      <CheckoutPage />
                    </OrderDataProvider>
                  </ProtectedRoute>
                }/>
                <Route path='/checkout/order_confirmation' element={                 
                  <ProtectedRoute>
                    <OrderDataProvider>
                      <OrderConfirmationPage />
                    </OrderDataProvider>
                  </ProtectedRoute>
                }/>
                <Route path='*' element={<HomePage />} />
              </Routes>
            </ShoppingCartProvider>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
 
export default App;
 