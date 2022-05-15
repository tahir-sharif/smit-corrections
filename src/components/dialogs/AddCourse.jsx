import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCourses, getCourses } from "../../store/actions/courses";
import { resetState } from "../../store/reducers/course";

export default function AlertDialog({ open, handleClose }) {
  const dispatch = useDispatch();
  const { loading, error, status } = useSelector(
    (state) => state.courses.addCourses
  );
  const [name, setName] = useState("");

  const submitHanlder = () => {
    dispatch(addCourses({ name }));
  };

  if (status === "fulfilled") {
    dispatch(resetState());
    handleClose();
    dispatch(getCourses());
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Add New Course</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              autoFocus
              onChange={(e) => setName(e.target.value)}
              placeholder="Course name"
              fullWidth
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={loading}
            variant="contained"
            onClick={submitHanlder}
            autoFocus
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
