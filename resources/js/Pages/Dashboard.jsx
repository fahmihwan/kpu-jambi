import React from "react";
import Button from "@mui/material/Button";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
const Dashboard = () => {
    return (
        <AuthenticatedLayout>
            <Button variant="contained">Hello World</Button>
            <Button variant="contained">Hello World</Button>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
