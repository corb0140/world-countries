import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  region: "All",
};

const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export default regionSlice.reducer;
