import { Box } from "@mui/material";
import React from "react";
import ProfileImage from "../../images/ProfileImage.png";

function Profile() {
  return (
    <Box m="10px">
      <Box
        component="img"
        sx={{
          height: "80vh",
          display: "block",
          overflow: "hidden",
          mr: "50px",
        }}
        src={ProfileImage}
        alt="My Profile Image"
      />
    </Box>
  );
}

export default Profile;
