import React from "react";

import { TextField } from "@mui/material";
import "./FormFields.css";
const FormField = ({ label, type, value, onChange, pattern,required }) => (
  <TextField
    margin="normal"
    required={required}
    fullWidth
    id={label.toLowerCase()}
    label={label}
    name={label.toLowerCase()}
    type={type || "text"}
    autoComplete={label.toLowerCase()}
    autoFocus
    value={value}
    onChange={onChange}
    inputProps={pattern ? { pattern } : {}}
  />
);

export default FormField;
