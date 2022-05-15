import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  login,
  register,
  adminLogin,
  getCurrentAdminUser,
  updateAdminUser,
} from "../actions/auth";
import cookie from "react-cookies";

const initialState = {
  isLoggedIn: !!cookie.load("user"),
  // isLoggedIn: false,
  getUserLoading: false,
  loading: false,
  user: {},
  regStatus: null,
  loginStatus: null,
  regError: null,
  loginError: null,
  admin: {
    loading: null,
    error: null,
    status: null,
    isLoggedIn: !!cookie.load("_admin"),
    user: {},
  },
  updateAdminUser: {
    loading: null,
    error: null,
    status: null,
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.loginStatus = "pending";
      state.loginError = null;
    },
    [login.fulfilled]: (state, action) => {
      const { token } = action.payload;
      cookie.save("user", token);
      state.isLoggedIn = true;
      state.loading = false;
      state.loginStatus = "fulfilled";
      state.loginError = null;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.loading = false;
      state.loginError = action.payload;
      state.loginStatus = "rejected";
    },
    [adminLogin.pending]: (state) => {
      state.admin.loading = true;
      state.admin.status = "pending";
      state.admin.error = null;
      state.admin.isLoggedIn = false;
    },
    [adminLogin.rejected]: (state, action) => {
      state.admin.loading = false;
      state.admin.status = "rejected";
      state.admin.error = action.payload;
      state.admin.isLoggedIn = false;
    },
    [adminLogin.fulfilled]: (state, action) => {
      state.admin.loading = false;
      state.admin.error = null;
      state.admin.status = "fulfilled";
      state.admin.isLoggedIn = true;
      state.admin.user = action.payload.user;
      cookie.save("_admin", action.payload.token);
    },
    [register.pending]: (state, action) => {
      state.loading = true;
      state.regStatus = "pending";
      state.regError = null;
      state.admin.isLoggedIn = false;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.regError = null;
      state.regStatus = "fulfilled";
      cookie.save("user", action.payload.token);
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.regStatus = "rejected";
      state.regError = action.payload;
    },

    [getCurrentAdminUser.pending]: (state, action) => {
      state.admin.loading = true;
      state.admin.error = null;
      state.admin.status = "pending";
    },
    [getCurrentAdminUser.fulfilled]: (state, action) => {
      state.admin.loading = false;
      state.admin.error = null;
      state.admin.status = "fulfilled";
      state.admin.isLoggedIn = true;
      state.admin.user = action.payload.user;
    },
    [getCurrentAdminUser.rejected]: (state, action) => {
      state.admin.loading = false;
      state.admin.error = action.payload.error;
      state.admin.status = "rejected";
      state.admin.isLoggedIn = false;
    },

    [updateAdminUser.pending]: (state, action) => {
      state.updateAdminUser.loading = true;
      state.updateAdminUser.status = "pending";
      state.updateAdminUser.error = null;
    },
    [updateAdminUser.fulfilled]: (state, action) => {
      state.updateAdminUser.loading = false;
      state.updateAdminUser.status = "fulfilled";
      state.updateAdminUser.error = null;
    },
    [updateAdminUser.rejected]: (state, action) => {
      state.updateAdminUser.loading = false;
      state.updateAdminUser.status = "rejected";
      state.updateAdminUser.error = action.payload;
    },

    [getCurrentUser.pending]: (state, action) => {
      state.getUserLoading = true;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.getUserLoading = false;
      state.user = action.payload.user;
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.getUserLoading = false;
    },
  },
  reducers: {
    logout: (state) => {
      cookie.remove("user");
      state.isLoggedIn = false;
      window.location.pathname = "/smit-corrections";
      state.user = {};
    },
    adminLogout: (state) => {
      cookie.remove("_admin");
      state.admin.isLoggedIn = false;
      state.admin.user = {};
    },
    resetState: (state) => {
      if (state.regStatus) {
        state.regStatus = null;
        state.loginStatus = null;
      }
    },
  },
});
export default authSlice.reducer;
export const { logout, resetState, adminLogout } = authSlice.actions;
