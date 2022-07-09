import { configureStore } from "@reduxjs/toolkit";
import jobPosts from "./jobs-reducer";
import filter from "./search-reducer";
import sort from "./sort-reducer";

const store = configureStore({
  reducer: {
    jobPosts,
    filter,
    sort,
  },
});

export default store;
