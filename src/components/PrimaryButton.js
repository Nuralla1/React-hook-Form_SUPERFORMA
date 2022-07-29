import { Button } from "@mui/material";
import React from "react";

const PrimaryButton = ({ children, props }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      {...props}
      sx={{ mt: 2 }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
