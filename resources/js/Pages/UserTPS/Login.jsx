import { Box, Button, Card, Hidden, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import styled from "styled-components";
import { InputEl } from "../../Components/InputCompt";

import LogoKpu from "../../../../public/img/logo-kpu.jpeg";
import { useForm } from "@inertiajs/inertia-react";
const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/");
    };
    return (
        <Box
            sx={{
                backgroundColor: "#091627",
                height: "100vh",
                padding: "0px",
                margin: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card
                sx={{
                    margin: "30px",
                    width: "800px",
                    height: "70vh",
                }}
            >
                <Grid2 container spacing={0} sx={{ height: "100%" }}>
                    <Grid2
                        md={6}
                        sx={{
                            backgroundColor: "red",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Hidden mdDown implementation="css">
                            <img
                                src={LogoKpu}
                                alt=""
                                style={{ width: "350px" }}
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
                            // border: "1px solid black",
                            height: "100%",
                        }}
                    >
                        <form onSubmit={handleSubmit} style={{ width: "80%" }}>
                            {/* <h4>Login</h4> */}

                            <Typography
                                sx={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                                variant="h4"
                                component="h1"
                            >
                                Login User
                            </Typography>
                            <DivFormControl>
                                <InputEl
                                    title="username"
                                    handleChange={handleChange}
                                    value={data.username}
                                    name="username"
                                />
                            </DivFormControl>
                            <DivFormControl>
                                <InputEl
                                    title="password"
                                    type="password"
                                    handleChange={handleChange}
                                    value={data.password}
                                    name="password"
                                />
                            </DivFormControl>
                            <Button
                                type="submit"
                                variant="contained"
                                // color="black"
                                sx={{
                                    width: "100%",
                                    height: "40px",
                                    // backgroundColor: "#091627",
                                    color: "white",
                                }}
                            >
                                Login
                            </Button>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    marginTop: "40px",
                                    color: "grey",
                                }}
                            >
                                Sistem Informasi <br />
                                Penghitungan Suara DPRD JAMBI
                            </Typography>
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
