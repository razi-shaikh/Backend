import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Category, Home, OrderHistory, ProductDetail } from '../pages'
import { Cart, Footer, Navbar, OrderDetail, Overview } from '../components'

function ClientRoute() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:levelone/:leveltwo/:levelthree' element={<Category />} />
        <Route path='/product/:productID' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/account/order' element={<OrderHistory />} />
        <Route path='/account/order/:orderID' element={<OrderDetail />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ClientRoute