import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import customerReducer from "./slices/customerSlice"

const store = configureStore({
    reducer: {
        product: productReducer,
        customer: customerReducer,
    }
})

export default store