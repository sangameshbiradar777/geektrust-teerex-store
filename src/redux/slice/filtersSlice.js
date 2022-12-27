import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchText: '',
    colorFilters: [],
    genderFilters: [],
    typeFilters: [],
    priceFilters: [],
    filteredProducts: [],
    searchProducts: [],
  },
  reducers: {
    updateFilters: (state, action) => {
      state[action.payload.name] = action.payload.filters;
    },
    updateFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    updateSearchProducts: (state, action) => {
      state.searchProducts = action.payload;
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload;
    }
  },
});

export default filtersSlice.reducer;
export const {
  updateFilters,
  updateFilteredProducts,
  updateSearchProducts,
  updateSearchText,
} = filtersSlice.actions;
