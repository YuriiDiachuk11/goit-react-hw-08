import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChange: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { filterChange } = slice.actions;
export const filterReducer = slice.reducer;
export const selectFilter = (state) => state.filter.name;
