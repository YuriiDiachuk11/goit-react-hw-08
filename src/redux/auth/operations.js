import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const goItAPI = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthHeader = (token) => {
  goItAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goItAPI.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    {
      try {
        const response = await goItAPI.post("/users/signup", credentials);
        setAuthHeader(response.data.token);
        return response.data;
      } catch {
        toast.error("Registration failed");
        return thunkAPI.rejectWithValue("Registration failed");
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await goItAPI.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch {
      toast.error("Login failed");
      return thunkAPI.rejectWithValue("Invalid Email or Password");
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goItAPI.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;

    if (!savedToken) {
      return thunkAPI.rejectWithValue("No token found. Please log in");
    }

    try {
      setAuthHeader(savedToken);
      const { data } = await goItAPI.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
