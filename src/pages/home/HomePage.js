import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  // const { } = useSelector((state) => state);

  useEffect(() => {
    // dispatch();
  }, [dispatch]);

  return (
    <Box className="half-width">
      <Typography variant="h4" sx={{ my: 3 }}>
        Our facebook posts
      </Typography>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4705246042910704&show_text=true&width=550"
        width="550"
        height="687"
        style={{ background: "white", marginBottom: "10px" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4696695090432466&show_text=true&width=550"
        width="550"
        height="687"
        style={{ background: "white", marginBottom: "10px" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4693126394122669&show_text=true&width=550"
        width="550"
        height="712"
        style={{ background: "white", marginBottom: "10px" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4687916564643652&show_text=true&width=550"
        width="550"
        height="751"
        style={{ background: "white", marginBottom: "10px" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>

      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4682333301868645&show_text=true&width=550"
        width="550"
        height="687"
        scrolling="no"
        style={{ background: "white", marginBottom: "10px" }}
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
};

export default HomePage;
