/* eslint-disable react/prop-types */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const AdminHeader = ({ toggleSidebar, handleLogout }) => {
  return (
    <Stack direction='row' alignItems='center' sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}}>

    <AppBar position="relative" sx={{ background: "white" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidebar}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <AccountCircleIcon
            sx={{ mr: 2, color: "black", background: "white" }}
          />
          <Link to='/admin'style={{ textDecoration: "none", color: "black" }}>
          <Typography variant="h6"  color="textPrimary" noWrap>
            Admin
          </Typography>
          </Link>
        </div>
        <Button
          sx={{ color: "black", "&:hover": { color: "blue" } }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
    </Stack>

  );
};

export default AdminHeader;
