import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: [],
  reducers: {
    getJobs(state, action) {
      state = action.payload.jobs;
      return state;
    },
  },
});

export const { getJobs } = jobSlice.actions;

export default jobSlice.reducer;
