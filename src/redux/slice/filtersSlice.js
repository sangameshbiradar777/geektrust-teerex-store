import { createSlice } from "@reduxjs/toolkit";

const unCheckFilters = (filters) => {
  return Object.entries(filters).reduce((object, filter) => {
    return { ...object, [filter[0]]: false };
  }, {});
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchText: "",
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
    },
    removeFilters: (state, action) => {
      state.colorFilters = unCheckFilters(state.colorFilters);
      state.genderFilters = unCheckFilters(state.genderFilters);
      state.typeFilters = unCheckFilters(state.typeFilters);
      state.priceFilters = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const {
  updateFilters,
  updateFilteredProducts,
  updateSearchProducts,
  updateSearchText,
  removeFilters,
} = filtersSlice.actions;
