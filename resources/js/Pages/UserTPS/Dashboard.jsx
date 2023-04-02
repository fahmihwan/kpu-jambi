import {
    Box,
    Button,
    Card,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { InputEl } from "../../Components/InputCompt";
const Dashboard = () => {
    return (
        <Stack
            sx={{
                position: "fixed",
                width: "100%",
                backgroundColor: "#312B46",
                height: "100vh",
            }}
        >
            <TopBarEl />
            <Box
                sx={{
                    backgroundColor: "#e8eaf6",
                    borderTopRightRadius: "30px",
                    borderTopLeftRadius: "40px",
                    height: "100vh",
                    padding: "20px",
                }}
            >
                <StatEl />

                <Box sx={{ marginTop: "20px" }}>
                    {/* <section
                        style={{ marginBottom: "10px", textAlign: "right" }}
                    >
                        <Typography variant="h5">Info: </Typography>
                        <Typography style={{ fontSize: "12px", color: "grey" }}>
                            22 dari 100 orang telah mengisi
                        </Typography>
                    </section> */}
                    <label>
                        <Typography>Isi total suara disini : </Typography>
                    </label>

                    <TextField
                        label={"total suara"}
                        type={"number"}
                        sx={{
                            width: "100%",
                            marginTop: "5px",
                            backgroundColor: "white",
                            marginBottom: "10px",
                        }}
                        variant="outlined"
                    />
                    <Button variant="outlined">Submit</Button>
                </Box>
                <Typography
                    style={{
                        marginTop: "20px",
                        fontSize: "13px",
                        textAlign: "center",
                    }}
                ></Typography>
            </Box>
        </Stack>
    );
};

export default Dashboard;

const TopBarEl = () => {
    return (
        <Box
            sx={{
                color: "white",
                display: "flex",
                margin: "10px",
                alignItems: "center",
                height: "100px",
                justifyContent: "start",
            }}
        >
            <PersonIcon
                sx={{
                    backgroundColor: "#484164",
                    width: "20px",
                    height: "20px",
                    borderRadius: "60px",
                    padding: "10px",
                    marginRight: "10px",
                }}
            ></PersonIcon>
            <Box>
                <Typography>Fahmi Ichwanurrohman</Typography>
                <Typography>
                    id: <span>51801232132132</span>
                </Typography>
            </Box>
        </Box>
    );
};
const StatEl = () => {
    return (
        <Card
            sx={{
                borderRadius: "20px",
                color: "white",

                padding: "20px",
                backgroundColor: "#663FF5",
            }}
            variant="outlined"
        >
            <Typography variant="h4">TPS001</Typography>
            <hr />

            <Box sx={{ marginTop: "20px" }}>
                <Typography variant="h5">detail : </Typography>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "100px" }}>
                                <Typography>Kabupaten</Typography>
                            </td>
                            <td>
                                <Typography>: Magetan</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Kecamatan</Typography>
                            </td>
                            <td>
                                <Typography>: Maospati</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Kelurahan</Typography>
                            </td>
                            <td>
                                <Typography>: Kraton</Typography>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </Card>
    );
};
