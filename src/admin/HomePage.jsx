import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../components/courses/CourseCard";
import { getCourses } from "../store/actions/courses";
import MinLoader from "../components/loaders/MiniLoader";
import AddCourse from "../components/dialogs/AddCourse";

const AdminHomePage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.courses.getCourses
  );
  const adminLoggedIn = useSelector((state) => state.auth.admin.isLoggedIn);
  const [courses, setCourses] = useState([]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log({ data, loading, error });
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  useEffect(() => {
    const sorted = [...data];
    sorted.sort((a, b) => a.isClosed - b.isClosed);
    setCourses(sorted);
  }, [data]);

  return (
    <>
      <Typography className="app-heading" sx={{ textAlign: "left" }}>
        Current Courses
      </Typography>
      <Button onClick={handleClickOpen}>+ Add Course</Button>
      <AddCourse
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {
            md: "flex-start",
            xs: "center",
          },
          margin: "14px",
          marginTop: "50px",
        }}
      >
        {loading ? (
          <MinLoader />
        ) : (
          <>
            {courses.length ? (
              courses.map((courseData, i) => {
                return (
                  <CourseCard
                    key={i}
                    adminLoggedIn={adminLoggedIn}
                    courseData={courseData}
                  />
                );
              })
            ) : (
              <Typography sx={{ m: "auto" }}>
                No Courses are Available.
              </Typography>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default AdminHomePage;
