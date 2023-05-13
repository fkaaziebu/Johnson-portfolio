import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const navItems = ["Home", "About", "Projects", "Resume"];

function Navbar() {
  const [active, setActive] = useState("home");
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <Box display="flex" alignItems="center">
          <Badge color="secondary" variant="dot" sx={{ color: "#8294C4" }}>
            <Typography
              variant="h2"
              sx={{
                color: "rgba(0, 0, 0, 1)",
                fontFamily: "Roboto",
                fontWeight: 900,
              }}
            >
              Johnson{" "}
            </Typography>
          </Badge>
        </Box>

        {/* RIGHT */}
        <Stack direction="row" spacing={4}>
          {navItems.map((item) => {
            const lcText = item.toLowerCase();
            return active === lcText ? (
              <Badge key={item} color="secondary" variant="dot">
                <Button
                  onClick={() => {
                    navigate(`/${lcText}`);
                    setActive(lcText);
                  }}
                  sx={{
                    fontSize: "1.5rem",
                    fontFamily: "Roboto",
                    fontWeight: 900,
                    color:
                      active === lcText
                        ? theme.palette.primary[600]
                        : theme.palette.primary[500],
                    backgoundColor:
                      active === lcText
                        ? "rgba(0, 0, 0, 1)"
                        : "rgba(255, 255, 255, 1)",
                  }}
                >
                  {item}
                </Button>
              </Badge>
            ) : (
              <Button
                key={item}
                onClick={() => {
                  navigate(`/${lcText}`);
                  setActive(lcText);
                }}
                sx={{
                  color:
                    active === lcText
                      ? theme.palette.primary[600]
                      : theme.palette.primary[500],
                  fontSize: "1.5rem",
                  fontFamily: "Roboto",
                  fontWeight: 900,
                }}
              >
                {item}
              </Button>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
