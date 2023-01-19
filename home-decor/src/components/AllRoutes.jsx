import React from 'react'

import { Routes,Route } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import Homepage from '../pages/Homepage'
import NotFound from '../pages/NotFound'
import Product from '../pages/Product'
import Search from '../pages/Search'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default AllRoutes