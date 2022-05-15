import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import EnrollCourse from "../dialogs/EnrollCourse";
import EditCourse from "../dialogs/EditCourse";

const CourseCard = ({ courseData, adminLoggedIn }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
  return (
    <Card sx={{ maxWidth: 340, m: 1.5, mt: 2 }}>
      <EnrollCourse
        open={open}
        heading={
          <Typography sx={{ mb: 2 }} component={"span"} fontWeight="600">
            {courseData.name}
          </Typography>
        }
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <EditCourse
        open={open}
        heading={
          <Typography sx={{ mb: 2 }} component={"span"} fontWeight="600">
            {courseData.name}
          </Typography>
        }
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
            onClick={handleClickOpen}
            disabled={courseData.isClosed}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
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
      </CardActions>
    </Card>
  );
};
export default CourseCard;
