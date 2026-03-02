import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[85vh] space-y-6 px-4">
            {/* Animated success icon */}
            <div className="flex justify-center items-center w-28 h-28 rounded-full bg-green-100 animate-bounce">
                <FaCheckCircle className="text-green-600 text-6xl" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-800 text-center">
                Payment Successful! 🎉
            </h1>

            {/* Subtext */}
            <p className="text-gray-500 text-center text-lg max-w-md">
                Thank you for your purchase. Your order has been placed and is being
                processed. You will receive a confirmation shortly.
            </p>

            {/* Order ID placeholder */}
            <div className="bg-green-50 border border-green-200 rounded-xl px-8 py-4 text-center">
                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-1">
                    Order Status
                </p>
                <p className="text-green-700 font-bold text-xl">Confirmed ✓</p>
            </div>

            {/* CTA Button */}
            <NavLink to="/">
                <button
                    className="mt-4 px-10 py-3 rounded-lg text-white text-lg font-semibold
          bg-[#15803d] border-2 border-[#15803d]
          hover:bg-white hover:text-[#15803d]
          transition-all duration-300 ease-in"
                >
                    Continue Shopping
                </button>
            </NavLink>
        </div>
    );
};

export default OrderSuccess;
