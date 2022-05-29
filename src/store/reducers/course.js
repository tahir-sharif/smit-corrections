import { createSlice } from "@reduxjs/toolkit";
import { addCourses, enrollInCourse, getCourses } from "../actions/courses";

const initialState = {
  getCourses: {
    data: [],
    loading: null,
    error: null,
  },
  enrollInCourse: {
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

    [enrollInCourse.pending]: (state) => {
      state.enrollInCourse.status = "pending";
      state.enrollInCourse.loading = true;
      state.enrollInCourse.error = null;
    },
    [enrollInCourse.fulfilled]: (state, action) => {
      state.enrollInCourse.status = "fulfilled";
      state.enrollInCourse.loading = false;
      state.enrollInCourse.error = null;
      state.enrollInCourse.data = action.payload;
    },
    [enrollInCourse.rejected]: (state, action) => {
      state.enrollInCourse.status = "rejected";
      state.enrollInCourse.loading = null;
      state.enrollInCourse.error = action.payload;
    },
  },
  reducers: {
    resetState: (state) => {
      state.addCourses.loading = false;
      state.addCourses.error = null;
      state.addCourses.status = null;
      console.log("reseted");
    },
    clearEnrollState: (state) => {
      state.enrollInCourse = {
        data: [],
        loading: null,
        error: null,
      };
    },
  },
});
export default courseSlice.reducer;
export const { resetState, clearEnrollState } = courseSlice.actions;
