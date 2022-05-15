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

export const getCourses = createAsyncThunk("getCourse", async (thunkApi) => {
  try {
    const response = await axios[api.getCourses().method](
      api.getCourses().url,
      headers(),
      null
    );
    return response.data;
  } catch (e) {
    return thunkApi.rejectWithValue(
      (!!e.response && e.response.data.error) || e.message
    );
  }
});

export const addCourses = createAsyncThunk(
  "addCourses",
  async (data, thunkApi) => {
    try {
      const response = await axios[api.addCourses().method](
        api.addCourses().url,
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
