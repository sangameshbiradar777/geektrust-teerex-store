import { createSlice } from '@reduxjs/toolkit';

const updateQuantity = (products, payload) => {
  return products.map(product => {
    const cartItem = payload.find(item => item[0] === product.id);
    if (cartItem) {
      return {...product, quantity: product.quantity - cartItem[1] };
    }
    return product;
  })
}

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    currentProducts: [],
    isLoading: true,
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
    productsFetchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateCurrentProducts: (state, action) => {
      state.currentProducts = action.payload;
    },
    updateProductsQuantity: (state, action) => {
      state.allProducts = updateQuantity(state.allProducts, action.payload);
      state.currentProducts = updateQuantity(state.currentProducts, action.payload);
    }
  }
})

export default productsSlice.reducer;
export const { productsFetchStart, productsFetchSuccess, productsFetchFailure, updateCurrentProducts, updateProductsQuantity } = productsSlice.actions;