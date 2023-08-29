import { Alert, Box, Button, Card, Hidden, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import styled from "styled-components";
import { InputEl } from "../../Components/InputCompt";
import LogoKpu from "../../../../public/img/boss-2.jpeg";
import { useForm } from "@inertiajs/inertia-react";
const Login = ({ custome_description, flash }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        password: "",
    });
    console.log(flash);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/auth");
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
                            backgroundColor: "#2a3c53",
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
                            height: "100%",
                        }}
                    >
                        <form onSubmit={handleSubmit} style={{ width: "80%" }}>
                            {/* <h4>Login</h4> */}
                            {flash?.error_message && (
                                <Alert
                                    severity="error"
                                    sx={{ marginBottom: "10px" }}
                                >
                                    {flash?.error_message}
                                </Alert>
                            )}
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    marginBottom: "20px",
                                }}
                                variant="h4"
                                component="h1"
                            >
                                Login Admin
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
                                disabled={processing}
                                sx={{
                                    width: "100%",
                                    height: "40px",
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
                                {custome_description?.custome_login_description}
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
