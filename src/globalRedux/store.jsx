
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice";
import ProductReducer from "./features/ProductSlice"


const store = configureStore({
    reducer: {
        cart: CartSlice,
        products: ProductReducer
    }
});


export default store;