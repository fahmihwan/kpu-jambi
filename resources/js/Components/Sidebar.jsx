import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import Collapse from "@mui/material/Collapse";

import StarBorder from "@mui/icons-material/StarBorder";
import { Link } from "@inertiajs/inertia-react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
export const Sidebar = ({ theme, handleDrawerClose, open }) => {
    const [toggleList, setToggleList] = useState(true);
    useEffect(() => {
        if (!open) {
            setToggleList(false);
        } else {
            setToggleList(true);
        }
    }, [open]);

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListMenu
                    title="Dashboard"
                    href="/admin/dashboard"
                    open={open}
                    linkActive={true}
                />
                <ListMenu
                    title="Real Time data"
                    href="#"
                    open={open}
                    linkActive={false}
                />

                <ListItem
                    disablePadding
                    sx={{
                        display: "block",
                    }}
                    onClick={() => setToggleList(!toggleList)}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            {/* icon title*/}
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={"master data"}
                            sx={{ opacity: open ? 1 : 0 }}
                        />

                        {open && (toggleList ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                </ListItem>

                <Collapse in={toggleList} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link
                            href="/admin/master/saksi"
                            style={{
                                textDecoration: "none",
                                backgroundColor: "red",
                            }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Saksi" />
                            </ListItemButton>
                        </Link>
                        <Link
                            href="/admin/master/kandidat"
                            style={{
                                textDecoration: "none",
                                backgroundColor: "red",
                            }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Kandidat" />
                            </ListItemButton>
                        </Link>
                        <Link
                            href="/admin/master/tps"
                            style={{
                                textDecoration: "none",
                                backgroundColor: "red",
                            }}
                        >
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="TPS" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>
                <ListMenu
                    title="Laporan"
                    href="#"
                    open={open}
                    linkActive={false}
                />
            </List>
            <Divider />
        </Drawer>
    );
};
const ListMenu = ({ title, href, open, linkActive }) => {
    return (
        <Link
            href={href}
            style={{
                textDecoration: "none",
                backgroundColor: "red",
            }}
        >
            <ListItem
                disablePadding
                sx={{
                    display: "block",
                    // backgroundColor: linkActive ? "red" : "white",
                }}
            >
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                    >
                        {/* icon title*/}
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary={title}
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                </ListItemButton>
            </ListItem>
        </Link>
    );
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
