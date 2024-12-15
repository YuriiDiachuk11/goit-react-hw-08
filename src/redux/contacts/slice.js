import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
  modal: {
    isOpen: false,
    contactToDelete: null,
    contactToEdit: null,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.contactToDelete = action.payload;
      state.modal.contactToEdit = null;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.contactToDelete = null;
      state.modal.contactToEdit = null;
    },
    openEditModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.contactToEdit = action.payload;
      state.modal.contactToDelete = null;
    },
    updateContactToEdit: (state, action) => {
      if (state.modal.contactToEdit) {
        state.modal.contactToEdit = {
          ...state.modal.contactToEdit,
          ...action.payload,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        const item = state.items.find((item) => item.id === payload.id);
        item.name = payload.name;
        item.number = payload.number;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state) => {
          state.loading = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled,
          editContact.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { openModal, closeModal, openEditModal, updateContactToEdit } =
  slice.actions;

export const contactsReducer = slice.reducer;
