import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import cookie from "react-cookies";

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${cookie.load("user")}`,
});
const adminHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${cookie.load("_admin")}`,
});

export const login = createAsyncThunk("login", async (data, thunkApi) => {
  try {
    const response = await axios[api.login().method](api.login().url, data);
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(
      (!!e.response && e.response.data.error) || e.message
    );
  }
});

export const adminLogin = createAsyncThunk(
  "adminLogin",
  async (data, thunkApi) => {
    try {
      const response = await axios[api.adminLogin().method](
        api.adminLogin().url,
        data
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        (!!e.response && e.response.data.error) || e.message
      );
    }
  }
);

export const register = createAsyncThunk("register", async (data, thunkApi) => {
  try {
    const response = await axios[api.register().method](
      api.register().url,
      data
    );
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(
      (!!e.response && e.response.data.error) || e.message
    );
  }
});

export const updateAdminUser = createAsyncThunk(
  "updateUser",
  async (data, thunkApi) => {
    try {
      const response = await axios[api.updateAdminUser().method](
        api.updateAdminUser().url,
        data,
        {
          headers: adminHeaders(),
        }
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        (!!e.response && e.response.data.error) || e.message
      );
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "getuser",
  async (data, thunkApi) => {
    try {
      const response = await axios[api.getuser().method](api.getuser().url, {
        body: data,
        headers: headers(),
      });
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        (!!e.response && e.response.data.error) || e.message
      );
    }
  }
);

export const getCurrentAdminUser = createAsyncThunk(
  "getCurrentAdminUser",
  async (data, thunkApi) => {
    try {
      const response = await axios[api.getAdminUser().method](
        api.getAdminUser().url,
        {
          body: data,
          headers: adminHeaders(),
        }
      );
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(
        (!!e.response && e.response.data.error) || e.message
      );
    }
  }
);
