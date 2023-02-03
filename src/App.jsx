import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import Bag from './pages/Bag'
import Checkout from './pages/Checkout/Checkout'
import Payment from './pages/Payment'
import Address from './pages/Address'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/bag" element={<Bag />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </div>
  )
}

export default App
