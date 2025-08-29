import React from 'react'
import ProductsPage from './pages/ProductsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products_page' element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App