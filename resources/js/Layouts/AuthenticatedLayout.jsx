import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import { Sidebar } from "../Components/Sidebar";
import { Navbar } from "../Components/Navbar";
export default function AuthenticatedLayout({ children, auth, share }) {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: "#f0f0f0",
                height: "100vh",
                // backgroundColor: "#ffffff",
            }}
        >
            <CssBaseline />

            <Navbar
                auth={auth}
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
            {/* sidebar */}
            <Sidebar
                share={share}
                theme={theme}
                handleDrawerClose={handleDrawerClose}
                drawerWidth={drawerWidth}
                open={open}
                setOpen={setOpen}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
