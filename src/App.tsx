import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import HomePage from './pages/HomePage';
 
function App() {
  return (
    <BrowserRouter>
     
      <div className="flex flex-col min-h-screen">
        <Header />
       
        <main className="flex-grow">
         
            <Routes>
              <Route path='/products_page' element={<ProductsPage />} />
              <Route path='/product/:productId' element={<ProductDetailsPage />} />
              <Route path='/home' element={<HomePage />} />
             
            </Routes>
         
        </main>
       
       
        <Footer />
      </div>
    </BrowserRouter>
  );
}
 
export default App;
 