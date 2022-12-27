import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productsSlice';
import filtersReducer from './slice/filtersSlice';
import cartReducer from './slice/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer
  }
})

export default store;