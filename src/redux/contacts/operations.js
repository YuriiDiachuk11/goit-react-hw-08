import { createAsyncThunk } from "@reduxjs/toolkit";

import { goItAPI } from "../auth/operations";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await goItAPI.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const response = await goItAPI.post("/contacts", body);
      toast.success("Contact added successfully!");
      return response.data;
    } catch (error) {
      toast.error("It is impossible to add contact");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await goItAPI.delete(`/contacts/${id}`);
      toast.success("Contact deleted successfully!");
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
