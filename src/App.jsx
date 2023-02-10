import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Bag from './pages/Bag'
import Checkout from './pages/Checkout/Checkout'
import Product from './pages/Product'

// {/*<Route path="/payment" element={<Payment />} />*/}
// {/*<Route path="/address" element={<Address />} />*/}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
