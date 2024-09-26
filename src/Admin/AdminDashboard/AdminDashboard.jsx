import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./AdminDashboard.css";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import AdminCards from "../AdminCard/AdminCards";
const AdminDashboard = () => {
    const navi = useNavigate();
  function navigatetocreateevent() {
    navi("/adminPanel");
  }
  return (
    <div className="adminGridLayer">
      <div className="sidebar">
        <AdminSidebar />
      </div>
          <div className="centerPart">
              <Typography>Events</Typography>
              <AdminCards/>


      </div>
      <div className="endPart">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add" onClick={navigatetocreateevent}>
            <AddIcon />
          </Fab>
        </Box>
      </div>
    </div>
  );
};

export default AdminDashboard;
