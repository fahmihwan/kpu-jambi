import { Alert } from "@mui/material";
import React from "react";

export const AlertFail = ({ message }) => {
    return (
        <Alert sx={{ marginBottom: "10px" }} severity="error">
            {message}
        </Alert>
    );
};

export const AlertSuccess = ({ message }) => {
    return <Alert severity="success">{message}</Alert>;
};
