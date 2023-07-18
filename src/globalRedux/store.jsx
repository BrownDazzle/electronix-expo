
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice";
import ProductReducer from "./features/ProductSlice"
import NotificationSlice from "./features/NotificationSlice";


const store = configureStore({
    reducer: {
        cart: CartSlice,
        products: ProductReducer,
        notification: NotificationSlice
    }
});


export default store;