import React from "react";

import { styled } from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { Inertia } from "@inertiajs/inertia";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "@inertiajs/inertia-react";

export const Navbar = ({ open, handleDrawerOpen, auth }) => {
    const handleLogout = () => {
        Inertia.post("/admin/auth/logout");
    };
    const [authIcon, setAuthIcon] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" open={open}>
            <Toolbar style={{ backgroundColor: "#24292E" }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6" noWrap component="div">
                        Sistem Informasi Penghitungan Suara
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography>Welcome, {auth?.user?.nama}</Typography>

                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                sx={{ marginTop: "40px" }}
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <Link
                                    style={{ textDecoration: "none" }}
                                    href="/admin/setting"
                                >
                                    <MenuItem onClick={handleClose}>
                                        Periode Pemilu
                                    </MenuItem>
                                </Link>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    href="/admin/akun"
                                >
                                    <MenuItem onClick={handleClose}>
                                        Pengaturan Akun
                                    </MenuItem>
                                </Link>

                                <MenuItem onClick={handleLogout}>
                                    <span style={{ marginRight: "10px" }}>
                                        Logout
                                    </span>
                                    <LogoutIcon />
                                </MenuItem>
                            </Menu>
                        </div>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
