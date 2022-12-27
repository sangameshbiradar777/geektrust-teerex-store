import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    currentProducts: [],
    filteredProducts: [],
    searchProducts: [],
    isLoading: false,
    error: {}
  },
  reducers: {
    productsFetchStart: (state) => {
      state.isLoading = true;
    },
    productsFetchSuccess: (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      state.currentProducts = action.payload;
    },
    prductsFetchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateCurrentProducts: (state, action) => {
      state.currentProducts = action.payload;
    },
    updateFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
      state.currentProducts = action.payload;
    },
    updateSearchProducts: (state, action) => {
      state.searchProducts = action.payload;
      state.currentProducts = action.payload;
    }
  }
})

export default productsSlice.reducer;
export const { productsFetchStart, productsFetchSuccess, productsFetchFailure, updateCurrentProducts, updateFilteredProducts, updateSearchProducts } = productsSlice.actions;