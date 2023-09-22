import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";

const store = configureStore({
  reducer: {
    navigations: navSlice,
  },
});

export default store;
