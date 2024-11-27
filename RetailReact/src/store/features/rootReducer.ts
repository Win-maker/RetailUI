import { combineReducers } from "@reduxjs/toolkit";
import LoaderSlice from "./loaderSlice";
import cartSlice  from "./cardSlice";

export const rootReducer
    = combineReducers({
    loader: LoaderSlice,
    cart: cartSlice,
})