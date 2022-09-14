import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Creating a post
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
