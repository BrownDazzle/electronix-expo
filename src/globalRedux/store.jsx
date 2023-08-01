
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice";
import ProductReducer from "./features/ProductSlice"
import NotificationSlice from "./features/NotificationSlice";
import OrdersSlice from "./features/OrdersSlice";


const store = configureStore({
    reducer: {
        cart: CartSlice,
        products: ProductReducer,
        notification: NotificationSlice,
        orders: OrdersSlice
    }
});


export default store;