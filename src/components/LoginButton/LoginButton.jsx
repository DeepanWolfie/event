import React from "react";
import { Button, styled } from "@mui/material";

// Custom styled button
const CustomButton = styled(Button)({
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: "10px 20px",
  fontSize: "16px",
  textTransform: "none",
  borderRadius: "8px",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  "&:active": {
    backgroundColor: "#0d47a1",
  },
  "&:disabled": {
    backgroundColor: "#90caf9",
    color: "#fff",
  },
});

const CustomLoginButton = ({ children, onClick }) => {
  return (
    <CustomButton variant="contained" onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default CustomLoginButton;
