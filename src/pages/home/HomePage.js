import React, { useEffect } from "react";
import { Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  // const { } = useSelector((state) => state);

  useEffect(() => {
    // dispatch();
  }, [dispatch]);

  return <Box className="half-width"></Box>;
};

export default HomePage;
