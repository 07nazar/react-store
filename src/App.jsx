import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Bag from './pages/Bag'
// import Product from './pages/Product'
// import Checkout from './pages/Checkout/Checkout'
// import Payment from './pages/Payment'
// import Address from './pages/Address'
// {/*<Route path="/product" element={<Product />} />*/}

// {/*<Route path="/checkout" element={<Checkout />} />*/}
// {/*<Route path="/payment" element={<Payment />} />*/}
// {/*<Route path="/address" element={<Address />} />*/}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bag" element={<Bag />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
