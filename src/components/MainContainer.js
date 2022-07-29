import { Container } from "@mui/material";
import React from "react";

const MainContainer = ({ children, ...props }) => {
  return (
    <Container
      container="main"
      maxWidth="xs"
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
