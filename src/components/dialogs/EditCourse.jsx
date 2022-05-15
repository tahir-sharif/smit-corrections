import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Grid, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ handleClose, open, heading }) {
  const inputHandler = () => {};

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
          <Typography sx={{ my: 2 }}>Edit {heading} Course</Typography>
          <form>
            <Grid container spacing={3} rowSpacing={5}>
              <Grid item xs={6}>
                <Typography fontSize={10} textAlign={"left"}>
                  Full name
                </Typography>
                <TextField
                  onChange={inputHandler}
                  name="fullName"
                  placeholder="Full name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={10} textAlign={"left"}>
                  Father name
                </Typography>
                <TextField
                  onChange={inputHandler}
                  name="fatherName"
                  placeholder="Father name"
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontSize={10} textAlign={"left"}>
                  Email
                </Typography>
                <TextField
                  onChange={inputHandler}
                  name="email"
                  placeholder="Email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={10} textAlign={"left"}>
                  CNIC No.
                </Typography>
                <TextField
                  onChange={inputHandler}
                  name="cnic"
                  placeholder="CNIC No."
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontSize={10} textAlign={"left"}>
                  Roll No.
                </Typography>
                <TextField
                  onChange={inputHandler}
                  name="rollNo"
                  placeholder="Roll No."
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 4 }}>
              <Grid item xs={6}></Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Dialog>
    </div>
  );
}
