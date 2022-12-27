import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    colorFilters: [],
    genderFilters: [],
    typeFilters: [],
    filteredProducts: [],
    searchProducts: [],
  },
  reducers: {
    updateFilters: (state, action) => {
      console.log(action);
      state[action.payload.name] = action.payload.filters;
    },
    updateFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    updateSearchProducts: (state, action) => {
      state.searchProducts = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const {
  updateFilters,
  updateFilteredProducts,
  updateSearchProducts,
  updateSearchText,
} = filtersSlice.actions;
