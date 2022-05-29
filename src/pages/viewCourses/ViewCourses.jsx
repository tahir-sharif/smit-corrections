import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/courses/CourseCard";
import { getCourses } from "../../store/actions/courses";
import MinLoader from "../../components/loaders/MiniLoader";

const ViewCourses = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { data, loading, error } = useSelector(
    (state) => state.courses.getCourses
  );
  
  const [courses, setCourses] = useState([]);

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
      <Typography className="app-heading">Current Courses</Typography>
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
                    courseData={courseData}
                    currentUser={user}
                    userLoggedIn={isLoggedIn}
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

export default ViewCourses;
