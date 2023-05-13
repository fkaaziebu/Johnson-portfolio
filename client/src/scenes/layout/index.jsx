import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Profile from "../global/Profile";

function Layout() {
  return (
    <Box>
      <Navbar />
      <Box
        display="flex"
        overflow="auto"
        alignItems="flex-start"
        m="25px 50px 0 50px"
        sx={{
          backgroundColor: "rgba(241, 246, 245, 0.5)",
          height: "85vh",
        }}
      >
        <Profile />
        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", p: 2, width: "100%", height: "100%", overflowY: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
