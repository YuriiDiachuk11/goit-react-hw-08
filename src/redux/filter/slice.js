import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isFocused: false,
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterChange: (state, action) => {
      state.name = action.payload;
    },
    searchFocus: (state, action) => {
      state.isFocused = action.payload;
    },
  },
});

export const { filterChange, searchFocus } = slice.actions;
export const filterReducer = slice.reducer;
