import { FaCartShopping } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart, orders } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" alt="Ecomzy Logo" className="h-14" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          {/* Orders link */}
          <NavLink to="/orders">
            <div className="relative">
              <FaClipboardList className="text-2xl" />
              {orders.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-yellow-500
                text-xs w-5 h-5 flex justify-center items-center rounded-full text-white">
                  {orders.length}
                </span>
              )}
            </div>
          </NavLink>

          {/* Cart link */}
          <NavLink to="/cart">
            <div className="relative">
              <FaCartShopping className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600
                text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

