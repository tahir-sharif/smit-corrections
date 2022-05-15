import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// Layouts with navbar
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
// Authentication
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
// Home Page
import HomePage from "./pages/home/HomePage";
import ViewCourses from "./pages/viewCourses/ViewCourses";
// Admin
import AdminLogin from "./admin/Login";
import Settings from "./admin/Settings";
import AdminHomePage from "./admin/HomePage";

const MRoutes = () => {
  const isAdminLoaggedIn = useSelector((state) => state.auth.admin.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/smit-corrections" />} />
        <Route path="/smit-corrections/login" element={<Login />} />
        <Route path="/smit-corrections/register" element={<Register />} />
        <Route path="/smit-corrections/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="view-courses" element={<ViewCourses />} />
        </Route>
        <Route
          path="/smit-corrections/admin"
          element={
            isAdminLoaggedIn ? (
              <AdminLayout />
            ) : (
              <Navigate to="/smit-corrections/admin/login" />
            )
          }
        >
          <Route index element={<AdminHomePage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/smit-corrections/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<h1>404 not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MRoutes;
