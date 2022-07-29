import { Box } from "@mui/material";
import React from "react";

const Form = ({ children, ...props }) => {
  return (
    <Box noValidate component={"form"} {...props} sx={{ mt: 1, width: "100%" }}>
      {children}
    </Box>
  );
};

export default Form;
