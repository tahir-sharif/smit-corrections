import React, { useEffect } from "react";
import AdminNavbar from "../AdminNavbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import AppLoader from "../components/loaders/AppLoader";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentAdminUser } from "../store/actions/auth";

const MainLayout = () => {
  const loading = useSelector((state) => state.auth.admin.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentAdminUser());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <>
          <AppLoader />
        </>
      ) : (
        <>
          <AdminNavbar />

          <Box
            sx={{
              width: "98%",
              margin: "0 auto",
              marginTop: "80px",
              minHeight: "calc(100vh - 94px)",
              background: "#ffffff",
              borderRadius: "10px",
            }}
          >
            <Outlet />
          </Box>
        </>
      )}
    </>
  );
};

export default MainLayout;
