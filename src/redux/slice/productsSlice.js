import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    currentProducts: [],
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
  }
})

export default productsSlice.reducer;
export const { productsFetchStart, productsFetchSuccess, productsFetchFailure, updateCurrentProducts,  } = productsSlice.actions;