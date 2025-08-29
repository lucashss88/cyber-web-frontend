import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <Routes>
              <Route path='/products_page' element={<ProductsPage />} />
              
            </Routes>
          </div>
        </main>
        
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;