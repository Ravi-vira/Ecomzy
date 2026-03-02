import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './Slices/CartSlice';
import OrderSlice from './Slices/OrderSlice';

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        orders: OrderSlice,
    }
})