import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { enrollInCourse, getCourses } from "../../store/actions/courses";
import { clearEnrollState } from "../../store/reducers/course";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ handleClose, open, heading, id }) {
  const [cnic, setcnic] = React.useState("");
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setcnic(e.target.value);
  };
  const { loading, error, status } = useSelector(
    (state) => state.courses.enrollInCourse
  );
  if (status === "fulfilled") {
    handleClose();
    dispatch(clearEnrollState());
    dispatch(getCourses());
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(enrollInCourse({ data: { cnic }, id }));
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {heading}
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ m: "auto", mt: 6, width: 0.7 }}>
          <Typography variant="h4" sx={{ my: 2 }}>
            Filling For {heading} Course
          </Typography>
          <form onSubmit={submitHandler}>
            <Grid container spacing={3} rowSpacing={5}>
              <Grid item xs={6}>
                {error ? (
                  <Typography sx={{ my: 2, color: "red" }}>{error}</Typography>
                ) : (
                  <Typography fontSize={14} sx={{ my: 2 }} textAlign={"left"}>
                    Kindly Confirm your CNIC Number !
                  </Typography>
                )}
                <TextField
                  onChange={inputHandler}
                  name="fullName"
                  required
                  type={"number"}
                  placeholder="CNIC No."
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} rowSpacing={5}>
              <Grid item xs={12}>
                <Button disabled={loading} type="submit" sx={{ mt: 2 }}>
                  Okay
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
    </div>
  );
}
