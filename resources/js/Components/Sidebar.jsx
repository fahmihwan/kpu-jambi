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

import { Link, usePage } from "@inertiajs/inertia-react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddHomeIcon from "@mui/icons-material/AddHome";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Typography } from "@mui/material";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
export const Sidebar = ({ theme, handleDrawerClose, open, setOpen, share }) => {
    const [toggleList, setToggleList] = useState(false);
    const [toggleListReport, setToggleListReport] = useState(false);
    // console.log(open);
    useEffect(() => {
        setToggleListReport(false);
        setToggleList(false);
    }, [open]);

    const iconSize = 20;
    const iconColorActive = "#BDBFC4";

    const menuActive = "#1a3251";
    const { url, component } = usePage();

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
            <DrawerHeader
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "20px",
                }}
            >
                <Typography
                    sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    {share?.kode}
                </Typography>
                <IconButton
                    style={{ color: iconColorActive, fontSize: iconSize }}
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
                {/* DASHBOARD */}
                <ListMenu
                    title="Dashboard"
                    href="/admin/dashboard"
                    open={open}
                    linkActive={url.startsWith("/admin/dashboard")}
                    icon={
                        <DashboardIcon
                            style={{
                                color: iconColorActive,
                                fontSize: iconSize,
                            }}
                        />
                    }
                />
                {/* MASTER DATA */}
                <ListItemToggleDropdown
                    toggleState={toggleList}
                    handleToggle={() => {
                        setToggleList(!toggleList);
                        setOpen(true);
                    }}
                    linkActive={url.startsWith("/admin/master")}
                    iconEl={
                        <BusinessCenterIcon
                            style={{
                                color: iconColorActive,
                                fontSize: iconSize,
                            }}
                        />
                    }
                    title={"Master Data"}
                    open={open}
                />

                {/* Dropdown Master Data */}
                <Collapse
                    in={toggleList}
                    timeout="auto"
                    unmountOnExit
                    sx={{ backgroundColor: "#091627" }}
                >
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
                                            color: iconColorActive,
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
                                    <AddHomeIcon
                                        style={{
                                            color: iconColorActive,
                                            fontSize: iconSize,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="TPS" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse>

                {/* KELOLA WAKIL */}
                <ListMenu
                    onClick={() => setToggleList(!toggleList)}
                    title="Kelola Wakil"
                    linkActive={url.startsWith("/admin/kelola-saksi")}
                    href="/admin/kelola-saksi"
                    open={open}
                    icon={
                        <PersonPinCircleIcon
                            style={{
                                color: iconColorActive,
                                fontSize: iconSize,
                            }}
                        />
                    }
                />
                <ListMenu
                    onClick={() => setToggleList(!toggleList)}
                    title="Suara"
                    linkActive={url.startsWith("/admin/laporan")}
                    href="/admin/laporan/laporan-suara"
                    open={open}
                    icon={
                        <WorkHistoryIcon
                            style={{
                                color: iconColorActive,
                                fontSize: iconSize,
                            }}
                        />
                    }
                />

                {/* LAPORAN */}
                {/* <ListItemToggleDropdown
                    toggleState={toggleListReport}
                    handleToggle={() => setToggleListReport(!toggleListReport)}
                    linkActive={url.startsWith("/admin/laporan")}
                    iconEl={
                        <TaskIcon
                            style={{
                                color: iconColorActive,
                                fontSize: iconSize,
                            }}
                        />
                    }
                    title={"Laporan"}
                    open={open}
                /> */}

                {/* <Collapse
                    in={toggleListReport}
                    timeout="auto"
                    unmountOnExit
                    sx={{ backgroundColor: "#091627" }}
                >
                    <List component="div" disablePadding>
                        <Link
                            href="/admin/laporan/laporan-saksi"
                            style={{
                                textDecoration: "none",
                                backgroundColor: "red",
                            }}
                        >
                            <ListItemButton sx={{ pl: 4, color: "#BDBFC4" }}>
                                <ListItemIcon>
                                    <BadgeIcon
                                        style={{
                                            color: iconColorActive,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Saksi" />
                            </ListItemButton>
                        </Link>

                        <Link
                            href="/admin/laporan/laporan-suara"
                            style={{
                                textDecoration: "none",
                                backgroundColor: "red",
                            }}
                        >
                            <ListItemButton sx={{ pl: 4, color: "#BDBFC4" }}>
                                <ListItemIcon>
                                    <HomeIcon
                                        style={{
                                            color: iconColorActive,
                                            fontSize: iconSize,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Suara" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Collapse> */}
                {/* END REPORT */}
            </List>
            <Divider />
        </Drawer>
    );
};

const ListItemToggleDropdown = ({
    handleToggle,
    iconEl,
    toggleState,
    title,
    open,
    linkActive,
}) => {
    return (
        <ListItem
            disablePadding
            sx={{
                color: "#BDBFC4",
                display: "block",
                backgroundColor: linkActive && "#1a3251",
            }}
            onClick={handleToggle}
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
                    {iconEl}
                </ListItemIcon>
                <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />

                {open && (toggleState ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
        </ListItem>
    );
};
const ListMenu = ({ title, href, open, linkActive, icon }) => {
    return (
        <Link
            href={href}
            style={{
                color: "#BDBFC4",
                textDecoration: "none",
            }}
        >
            <ListItem
                disablePadding
                sx={{
                    display: "block",
                    backgroundColor: linkActive && "#1a3251",
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
                        {icon}
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
