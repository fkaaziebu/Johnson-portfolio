import { Box, Button, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typed from "react-typed";

function AboutInfo() {
  return (
    <Box
      display="flex"
      gap="2rem"
      flexDirection="column"
      alignItems="space-around"
      height="100%"
      p="50px"
    >
      <Box>
        <Typography
          variant="h1"
          sx={{ fontWeight: "900", letterSpacing: "5px" }}
        >
          JOHNSON AMEYAW
        </Typography>
      </Box>
      <Box
        sx={{ width: "100px", height: "7px", backgroundColor: "#000" }}
      ></Box>
      <Box display="flex">
        <Typography sx={{ fontFamily: "Roboto", fontSize: "2rem", fontWeight: "300", color: "rgba(0, 0, 0, 0.5)" }}>
          I can{" "}
          <Typed
            strings={[
              "get you a website",
              "design interactive user interface",
              "produce digital documents",
              "teach Frontend development",
            ]}
            style={{
              fontFamily: "Roboto",
              fontWeight: "900",
              color: "#000"
            }}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: "#000000",
            fontSize: "1.5rem",
            color: "rgba(255, 255, 255, 1)",
            border: `3px solid rgba(0, 0, 0, 0.76)`,
            textTransform: "none",
            fontFamily: "Roboto",
            padding: "1rem",
          }}
        >
          Read about me
        </Button>
      </Box>
      <Box display="flex" gap="0.5rem">
        <IconButton>
          <TwitterIcon sx={{ fontSize: "40px", color: "#000000" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ fontSize: "40px", color: "#000000" }} />
        </IconButton>
        <IconButton>
          <GitHubIcon sx={{ fontSize: "40px", color: "#000000" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default AboutInfo;
