import {
    Box,
    Button,
    Card,
    Container,
    Hidden,
    Stack,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import styled from "styled-components";
import { ButtonSubmitEl, InputEl } from "../../Components/InputCompt";

import LogoKpu from "../../../../public/img/logo-kpu.jpeg";
const Login = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                backgroundColor: "#1C2536",
                width: "100%",
                height: "100vh",
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                sx={{
                    margin: "30px",
                    width: "900px",
                    height: "70vh",
                    sm: {
                        height: "0vh",
                    },
                }}
            >
                <Grid2 container spacing={3} sx={{ height: "100%" }}>
                    <Grid2
                        // sm={{ display: "none" }}
                        md={6}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Hidden mdDown implementation="css">
                            <img
                                src={LogoKpu}
                                alt=""
                                style={{ width: "300px" }}
                            />
                        </Hidden>
                    </Grid2>

                    <Grid2
                        // sm={12}
                        md={6}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                        }}
                    >
                        <form action="" style={{ width: "80%" }}>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                                variant="h4"
                                component="h1"
                            >
                                Login
                            </Typography>
                            <DivFormControl>
                                <InputEl title="username" name="username" />
                            </DivFormControl>
                            <DivFormControl>
                                <InputEl title="password" name="password" />
                            </DivFormControl>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ width: "100%", height: "40px" }}
                            >
                                Login
                            </Button>
                        </form>
                    </Grid2>
                </Grid2>
            </Card>
        </Box>
    );
};

export default Login;

const DivFormControl = styled.div`
    margin-bottom: 20px;
`;
