import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import filtersReducer from "./slice/filtersSlice";
import cartReducer from "./slice/cartSlice";
import searchReducer from "./slice/searchSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
