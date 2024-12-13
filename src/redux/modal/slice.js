import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IsOpen: false,
  contactToDelete: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.IsOpen = true;
      state.contactToDelete = action.payload;
    },
    closeModal: (state) => {
      state.IsOpen = false;
      state.contactToDelete = null;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
