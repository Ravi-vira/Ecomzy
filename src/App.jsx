import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'
import OrderSuccess from './pages/OrderSuccess'
import Orders from './pages/Orders'
import Navbar from './components/Navbar';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
        <Toaster />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  )
};

export default App;
