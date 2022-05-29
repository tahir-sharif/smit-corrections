import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import EnrollCourse from "../dialogs/EnrollCourse";
import EditCourse from "../dialogs/EditCourse";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../assets/images/smit.png";

const CourseCard = ({
  courseData,
  adminLoggedIn,
  userLoggedIn,
  currentUser,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (userLoggedIn) {
      setOpen(true);
    } else {
      navigate("/smit-corrections/login");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  let enrolled = false;
  if (currentUser) {
    const me = currentUser._id;
    enrolled = courseData.students.includes(me);
    console.log(courseData.students, me);
  }
  return (
    <Card sx={{ maxWidth: 340, m: 1.5, mt: 2 }}>
      <EnrollCourse
        open={open}
        heading={courseData.name}
        id={courseData._id}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <EditCourse
        open={openEdit}
        heading={
          <Typography sx={{ mb: 2 }} component={"span"} fontWeight="600">
            {courseData.name}
          </Typography>
        }
        handleClickOpen={handleClickOpen}
        handleClose={handleCloseEdit}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={defaultImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {courseData.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "right" }}>
        {courseData.isClosed ? (
          <Typography sx={{ color: "red", pr: 3 }}>Closed</Typography>
        ) : adminLoggedIn ? (
          <Button
            onClick={handleClickOpenEdit}
            disabled={courseData.isClosed}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        ) : (
          <>
            {enrolled ? (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography color="#029e02">
                  Your now are a part of this course !
                </Typography>
                <Button>Apply for Leave</Button>
              </Box>
            ) : (
              <Button
                onClick={handleClickOpen}
                disabled={courseData.isClosed}
                variant="contained"
                color="primary"
              >
                Enroll Now
              </Button>
            )}
          </>
        )}
      </CardActions>
    </Card>
  );
};
export default CourseCard;
