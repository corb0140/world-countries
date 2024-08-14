import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import regionReducer from "./slices/regionSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    region: regionReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
