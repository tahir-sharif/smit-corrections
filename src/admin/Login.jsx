import React, {  useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Input,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../store/actions/auth";
import Snackbar from "../components/alert/SnackBar";
import "./style.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, status } = useSelector((state) => state.auth.admin);
  const [statusValid, setstatusValid] = useState(false);

  const pending = status === "pending";
  if (pending) {
    !statusValid && setstatusValid(true);
  }
  const loginCompleted = status === "fulfilled" && statusValid;
  if (loginCompleted) {
    setTimeout(() => {
      navigate("/smit-corrections/admin");
    }, 800);
  }

  const submit = (e) => {
    e.preventDefault();
    let data = {};
    e.target.querySelectorAll("input").forEach((input) => {
      data[input.name] = input.value;
    });
    dispatch(adminLogin(data));
  };

  return (
    <Box className="form-wrapper centered full-screen-height">
      <form className="form" onSubmit={submit}>
        <Snackbar
          isOpen={(statusValid && !!error) || loginCompleted}
          message={error || (loginCompleted && "Successfully Logged  in !")}
          severity={error ? "error" : "success"}
        />
        <Typography mb={3} component={"h1"} variant="body">
          Admin Login
        </Typography>
        <Input
          className="form-control"
          type="email"
          name="email"
          required
          placeholder="Enter Email"
        />
        <Input
          className="form-control"
          type="password"
          name="password"
          required
          placeholder="Enter Password"
        />
        {loading ? (
          <Box my={2}>
            <CircularProgress size={30} />
          </Box>
        ) : (
          <>
            <Button className="form-btn" type="submit" variant="contained">
              Login
            </Button>
          </>
        )}
      </form>
    </Box>
  );
};

export default Login;
