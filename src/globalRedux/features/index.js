
import { combineReducers } from "redux";

import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";


export const reducers = combineReducers({ ProductSlice, CartSlice })