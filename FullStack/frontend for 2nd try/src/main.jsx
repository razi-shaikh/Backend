import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Category, Home } from './customer/pages/index.js'
import ProductDetail from './customer/pages/ProductDetail/ProductDetail.jsx'
import { Cart, Overview } from './customer/components/index.js'
import OrderHistory from './customer/pages/OrderHistory/OrderHistory.jsx'
import OrderDetail from './customer/components/OrderDetail/OrderDetail.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/:levelone/:leveltwo/:levelthree' element={<Category />} />
      <Route path='/product/:productID' element={<ProductDetail />} />
      <Route path='history' element={<History />} />
      <Route path='cart' element={<Cart />} />
      <Route path='overview' element={<Overview />} />
      <Route path='orderdetail' element={<OrderDetail />} />
    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
