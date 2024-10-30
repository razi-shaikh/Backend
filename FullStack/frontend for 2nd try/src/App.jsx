import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClientRoute from './customer/Route/ClientRoute'

function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/*' element={<ClientRoute />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
