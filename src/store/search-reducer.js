import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    searchTitle(state, action) {
      return action.payload;
    },
  },
});

export const { searchTitle } = searchSlice.actions;

export default searchSlice.reducer;
