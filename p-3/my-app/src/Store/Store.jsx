import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Store/Slice/TodoSlice';

export const Store = configureStore({
    reducer: {
        todos: todoReducer
    }
});
