import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchText: ''
  },
  reducers: {
    updateSearchText: (state, action) => {
      state.searchText = action.payload;
    }
  }
})

export default searchSlice.reducer;
export const { updateSearchText } = searchSlice.actions;