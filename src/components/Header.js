import { Typography } from "@mui/material";

import React from "react";

const Header = () => {
  return (
    <Typography
      sx={{
        fontFamily: "Permanent Marker",
        margin: 3,
        textAlign: "center",
        fontSize: "40px",
        color: "deeppink",
        textShadow: "1px 1px darkmagenta",
      }}
      component="h1"
      variant="h5"
    >
      Super Forma
    </Typography>
  );
};

export default Header;
