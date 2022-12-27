import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productsSlice';
import filtersReducer from './slice/filtersSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer
  }
})

export default store;