import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IsOpen: false,
  contactToDelete: null,
  contactToEdit: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.IsOpen = true;
      state.contactToDelete = action.payload;
      state.contactToEdit = null;
    },
    closeModal: (state) => {
      state.IsOpen = false;
      state.contactToDelete = null;
      state.contactToEdit = null;
    },
    openEditModal: (state, action) => {
      state.IsOpen = true;
      state.contactToEdit = action.payload;
      state.contactToDelete = null;
    },
    updateContactToEdit: (state, action) => {
      if (state.contactToEdit) {
        state.contactToEdit = { ...state.contactToEdit, ...action.payload };
      }
    },
  },
});

export const { openModal, closeModal, openEditModal, updateContactToEdit } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
