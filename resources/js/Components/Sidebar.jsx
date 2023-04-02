import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import Collapse from "@mui/material/Collapse";

import { Link } from "@inertiajs/inertia-react";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddHomeIcon from "@mui/icons-material/AddHome";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
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
        <Drawer
            variant="permanent"
            PaperProps={{
                sx: {
                    backgroundColor: "#091627",
                },
            }}
            open={open}
        >
            <DrawerHeader>
                <IconButton
                    style={{ color: "#BDBFC4" }}
                    onClick={handleDrawerClose}
                >
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List
                sx={{
                    backgroundColor: "#101F33",
                    margin: "10px",
                    borderRadius: "10px",
                    color: "white",
                }}
            >
                <ListMenu
                    title="Dashboard"
                    href="/admin/dashboard"
                    open={open}
                    linkActive={true}
                    icon={<DashboardIcon style={{ color: "#BDBFC4" }} />}
                />
                {/* <ListMenu
                    title="Real Time data"
                    href="#"
                    open={open}
                    linkActive={false}
                /> */}

                <ListItem
                    disablePadding
                    sx={{
                        color: "#BDBFC4",
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

                            <BusinessCenterIcon style={{ color: "#BDBFC4" }} />
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
                            <ListItemButton sx={{ pl: 4, color: "#BDBFC4" }}>
                                <ListItemIcon>
                                    <PersonAddIcon
                                        style={{
                                            color: "#BDBFC4",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Saksi" />
                            </ListItemButton>
                        </Link>

                        <Link
                            href="/admin/master/tps"
                            style={{
                                textDecoration: "none",
                                backgroundColor: "red",
                            }}
                        >
                            <ListItemButton sx={{ pl: 4, color: "#BDBFC4" }}>
                                <ListItemIcon>
                                    <AddHomeIcon style={{ color: "#BDBFC4" }} />
                                </ListItemIcon>
                                <ListItemText primary="TPS" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>

                <ListMenu
                    title="Periode Pemilu"
                    href="/admin/periode-pemilu"
                    open={open}
                    linkActive={false}
                    icon={<EventRoundedIcon style={{ color: "#BDBFC4" }} />}
                />

                {/* <ListMenu
                    title="Laporan"
                    href="/admin/laporan"
                    open={open}
                    linkActive={false}
                    icon={
                        <AssessmentRoundedIcon style={{ color: "#BDBFC4" }} />
                    }
                /> */}
            </List>
            <Divider />
        </Drawer>
    );
};
const ListMenu = ({ title, href, open, linkActive, icon }) => {
    return (
        <Link
            href={href}
            style={{
                color: "#BDBFC4",
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
                        {icon}
                        {/* <InboxIcon style={{ color: "#BDBFC4" }} /> */}
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
