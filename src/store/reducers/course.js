import { createSlice } from "@reduxjs/toolkit";
import { addCourses, getCourses } from "../actions/courses";

const initialState = {
  getCourses: {
    data: [],
    loading: null,
    error: null,
  },
  addCourses: {
    data: [],
    loading: null,
    error: null,
    status: null,
  },
};
const courseSlice = createSlice({
  name: "course",
  initialState,
  extraReducers: {
    [getCourses.pending]: (state) => {
      state.getCourses.loading = true;
      state.getCourses.error = null;
    },
    [getCourses.fulfilled]: (state, action) => {
      state.getCourses.loading = false;
      state.getCourses.error = null;
      state.getCourses.data = action.payload;
    },
    [getCourses.rejected]: (state, action) => {
      state.getCourses.loading = null;
      state.getCourses.error = action.payload;
    },

    [addCourses.pending]: (state) => {
      state.addCourses.status = "pending";
      state.addCourses.loading = true;
      state.addCourses.error = null;
    },
    [addCourses.fulfilled]: (state, action) => {
      state.addCourses.status = "fulfilled";
      state.addCourses.loading = false;
      state.addCourses.error = null;
      state.addCourses.data = action.payload;
    },
    [addCourses.rejected]: (state, action) => {
      state.addCourses.status = "rejected";
      state.addCourses.loading = null;
      state.addCourses.error = action.payload;
    },
  },
  reducers: {
    resetState: (state) => {
      state.addCourses.loading = false;
      state.addCourses.error = null;
      state.addCourses.status = null;
      console.log("reseted");
    },
  },
});
export default courseSlice.reducer;
export const { resetState } = courseSlice.actions;
