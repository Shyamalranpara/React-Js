import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Store/Slice/TodoSlice';
import ProductReducer from '../Store/Slice/ProductSlice';

export const Store = configureStore({
    reducer: {
        todos: todoReducer,
        products: ProductReducer 
    }
});
