import {
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminUser } from "../store/actions/auth";

const Settings = () => {
  const { loading, error, status } = useSelector(
    (state) => state.auth.updateAdminUser
  );
  const dispatch = useDispatch();

  const [inputData, setinputData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const inputHandler = (e) => {
    setinputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submit = () => {
    dispatch(updateAdminUser(inputData));
  };
  console.log(inputData);
  return (
    <Box sx={{ m: "auto", mt: 10, width: 0.7 }}>
      <Typography sx={{ my: 4 }}>Settings</Typography>

      <Grid container spacing={3} rowSpacing={5}>
        <Grid item xs={6}>
          <Typography>Update Pasword</Typography>
          {status === "fulfilled" ? (
            <Typography sx={{ color: "#398f00", my: 3 }}>
              Password Updated SuccessFuly !
            </Typography>
          ) : (
            <Typography sx={{ color: "red", my: 3 }}>{error}</Typography>
          )}

          <Typography fontSize={10} textAlign={"left"}>
            Old Password
          </Typography>
          <TextField
            onChange={inputHandler}
            name="oldPassword"
            value={inputData.oldpassword}
            type="password"
            placeholder="Old Password"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={6}>
          <Typography fontSize={10} textAlign={"left"}>
            New Password
          </Typography>
          <TextField
            onChange={inputHandler}
            name="newPassword"
            value={inputData.newPassword}
            type="password"
            placeholder="New Password"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={6} textAlign="right">
          <Button
            disabled={loading}
            variant="contained"
            type="submit"
            onClick={submit}
          >
            {loading ? "Updating.." : "update"}
          </Button>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Settings;
