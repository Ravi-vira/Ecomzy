// Custom hook to dynamically load the Razorpay checkout script
const useRazorpay = () => {
    const loadRazorpay = () => {
        return new Promise((resolve) => {
            // If already loaded, resolve immediately
            if (window.Razorpay) {
                resolve(true);
                return;
            }

            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    return { loadRazorpay };
};

export default useRazorpay;
