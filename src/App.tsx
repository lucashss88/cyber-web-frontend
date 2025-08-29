import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path='/products_page' element={<ProductsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;