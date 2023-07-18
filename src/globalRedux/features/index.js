
import { combineReducers } from "redux";

import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import NotificationSlice from "./NotificationSlice";


export const reducers = combineReducers({ ProductSlice, CartSlice, NotificationSlice })