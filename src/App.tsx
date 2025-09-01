import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import HomePage from './pages/HomePage';

function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="flex-grow">
      <div className="container mx-auto p-4">
        {children}
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <Routes>
          <Route path='/products_page' element={<MainLayout><ProductsPage /></MainLayout>} />
          <Route path='/product/:productId' element={<MainLayout><ProductDetailsPage /></MainLayout>} />
          <Route path='/home' element={<HomePage />}/>    
        </Routes>
        
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;