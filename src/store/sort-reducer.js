import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    filterSort: "",
  },
  reducers: {
    sortDate(state, action) {
      state.filterSort = action.payload;
    },
  },
});

export const { sortDate } = sortSlice.actions;

export default sortSlice.reducer;
