import { createSlice } from "@reduxjs/toolkit";

const unCheckFilters = (filters) => {
  return Object.entries(filters).reduce((object, filter) => {
    return { ...object, [filter[0]]: false };
  }, {});
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    colorFilters: [],
    genderFilters: [],
    typeFilters: [],
    priceFilters: [],
  },
  reducers: {
    initializeFilters: (state, action) => {
      state.colorFilters = action.payload.colorFilters;
      state.genderFilters = action.payload.genderFilters;
      state.priceFilters = action.payload.priceFilters;
      state.typeFilters = action.payload.typeFilters;
    },
    updateFilters: (state, action) => {
      state[action.payload.name] = action.payload.filters;
    },
    clearFilters: (state, action) => {
      state.colorFilters = unCheckFilters(state.colorFilters);
      state.genderFilters = unCheckFilters(state.genderFilters);
      state.typeFilters = unCheckFilters(state.typeFilters);
      state.priceFilters = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const {
  initializeFilters,
  updateFilters,
  clearFilters,
} = filtersSlice.actions;
