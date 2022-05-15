import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
import course from "./reducers/course";

const store = configureStore({
  reducer: {
    auth: authSlice,
    courses: course,
  },
});
export default store;
