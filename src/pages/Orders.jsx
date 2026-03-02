import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaBoxOpen } from "react-icons/fa";

const Orders = () => {
    const orders = useSelector((state) => state.orders);

    // Most recent orders first
    const sortedOrders = [...orders].reverse();

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 min-h-[85vh]">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Order History</h1>
                <p className="text-gray-500 mt-1">All your confirmed and failed orders in one place.</p>
            </div>

            {/* Tabs summary */}
            <div className="flex gap-4 mb-8 flex-wrap">
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-5 py-3">
                    <FaCheckCircle className="text-green-600 text-lg" />
                    <span className="font-semibold text-green-700">
                        {orders.filter((o) => o.status === "confirmed").length} Confirmed
                    </span>
                </div>
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-5 py-3">
                    <FaTimesCircle className="text-red-500 text-lg" />
                    <span className="font-semibold text-red-600">
                        {orders.filter((o) => o.status === "failed").length} Failed
                    </span>
                </div>
            </div>

            {/* Order List */}
            {sortedOrders.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 space-y-4 text-center">
                    <FaBoxOpen className="text-6xl text-gray-300" />
                    <h2 className="text-xl font-semibold text-gray-500">No orders yet</h2>
                    <p className="text-gray-400">Your order history will appear here after checkout.</p>
                    <NavLink to="/">
                        <button className="mt-2 px-8 py-2.5 rounded-lg text-white bg-[#15803d] border-2 border-[#15803d]
              hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in font-semibold">
                            Shop Now
                        </button>
                    </NavLink>
                </div>
            ) : (
                <div className="flex flex-col gap-6">
                    {sortedOrders.map((order) => (
                        <div
                            key={order.id}
                            className={`rounded-2xl border shadow-sm overflow-hidden transition-all duration-200
                ${order.status === "confirmed"
                                    ? "border-green-200 bg-white"
                                    : "border-red-200 bg-white"}`}
                        >
                            {/* Order Header */}
                            <div
                                className={`flex flex-wrap items-center justify-between px-5 py-3 gap-2
                  ${order.status === "confirmed" ? "bg-green-50" : "bg-red-50"}`}
                            >
                                <div className="flex items-center gap-2">
                                    {order.status === "confirmed" ? (
                                        <FaCheckCircle className="text-green-600 text-lg" />
                                    ) : (
                                        <FaTimesCircle className="text-red-500 text-lg" />
                                    )}
                                    <span
                                        className={`font-bold text-sm uppercase tracking-wide
                      ${order.status === "confirmed" ? "text-green-700" : "text-red-600"}`}
                                    >
                                        {order.status === "confirmed" ? "Payment Confirmed" : "Payment Failed"}
                                    </span>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400">{order.date}</p>
                                    <p className="text-xs text-gray-500 font-mono">{order.id}</p>
                                </div>
                            </div>

                            {/* Order Body */}
                            <div className="px-5 py-4">
                                {/* Items */}
                                <div className="flex flex-col gap-3 mb-4">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-12 w-12 object-contain bg-gray-50 rounded-lg border p-1 flex-shrink-0"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-700 truncate">{item.title}</p>
                                                <p className="text-xs text-gray-400">${item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer row */}
                                <div className="flex flex-wrap items-center justify-between border-t pt-3 gap-2">
                                    <div className="text-sm text-gray-500">
                                        {order.items.length} item{order.items.length !== 1 ? "s" : ""}
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">Total Charged</p>
                                        <p className="font-bold text-gray-800">
                                            ₹{order.totalINR}{" "}
                                            <span className="text-gray-400 font-normal text-xs">(${order.totalAmount.toFixed(2)})</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Failure reason */}
                                {order.status === "failed" && order.reason && (
                                    <div className="mt-3 bg-red-50 border border-red-100 rounded-lg px-4 py-2 text-sm text-red-600">
                                        <span className="font-semibold">Reason: </span>{order.reason}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
