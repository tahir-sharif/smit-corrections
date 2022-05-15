import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "./store/reducers/auth";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button, Chip } from "@mui/material";

const AdminNavbar = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth.admin);
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const settings = [
    {
      name: "Settings",
      onClick: () => {
        navigate("/smit-corrections/admin/settings");
      },
    },
    {
      name: "Logout",
      onClick: () => {
        dispatch(adminLogout());
        navigate("/smit-corrections/admin");
      },
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0f6200" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link style={{ color: "#fff" }} to="/admin">
              SMIT
            </Link>
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link style={{ color: "#fff" }} to="/admin">
              SMIT
            </Link>
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ pl: 2, flexGrow: 1, textAlign: "left" }}
          >
            Admin
          </Typography>

          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Chip
                avatar={
                  <Avatar
                    sx={{ width: "30px !important", height: "30px !important" }}
                  />
                }
                label={
                  <Typography color={"white"} fontSize="14px">
                    {user.name}
                  </Typography>
                }
                sx={{
                  background: "transparent",
                  cursor: "pointer",
                  padding: "20px 0",
                  "&:hover": {
                    background: "#0000000f;",
                  },
                }}
              />
              <Tooltip title="Open settings">
                <IconButton
                  style={{ padding: "8px" }}
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <IoMdArrowDropdown color="white" size={20} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => {
                      setting.onClick();
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  onClick={() => navigate("/smit-corrections/login")}
                  sx={{ color: "white" }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("/smit-corrections/register")}
                  sx={{ color: "white" }}
                >
                  Signup
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AdminNavbar;
