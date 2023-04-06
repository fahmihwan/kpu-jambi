import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

const Dashboard = ({ item, isSubmit }) => {
    console.log(isSubmit);
    const { data, setData, post, processing, errors, reset } = useForm({
        qty: "",
    });

    const handleLogout = () => {
        return Inertia.post("/user-tps/logout");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/user-tps/transaksi");
    };
    return (
        <Stack
            sx={{
                position: "fixed",
                width: "100%",
                backgroundColor: "#6219B8",
                height: "100vh",
            }}
        >
            <TopBarEl
                nama={item?.saksi?.nama}
                username={item?.saksi?.username}
                handleLogout={handleLogout}
            />
            <Box
                sx={{
                    backgroundColor: "#e8eaf6",
                    height: "100vh",
                    padding: "20px",
                }}
            >
                {/* <InfoEl /> */}
                <StatEl
                    nama={item?.tps?.nama}
                    kota={item?.tps?.kota}
                    kecamatan={item?.tps?.kecamatan}
                    kelurahan={item?.tps?.kelurahan}
                />

                <Box sx={{ marginTop: "20px" }}>
                    <form action="" onSubmit={handleSubmit}>
                        <InfoEl />
                        <TextField
                            label={"total suara"}
                            type={"number"}
                            sx={{
                                width: "100%",
                                marginTop: "5px",
                                backgroundColor: "white",
                                marginBottom: "10px",
                            }}
                            onChange={(e) => setData("qty", e.target.value)}
                            value={data.qty}
                            variant="outlined"
                        />
                        {isSubmit ? (
                            <Button type="submit">Edit</Button>
                        ) : (
                            <Button type="submit" variant="outlined">
                                Submit
                            </Button>
                        )}
                    </form>
                </Box>
                <Typography
                    style={{
                        marginTop: "60px",
                        fontSize: "15px",
                        textAlign: "center",
                    }}
                >
                    Jika terjadi kendala harap Hubungi Admin di
                    <a
                        target={"_blank"}
                        href="https://api.whatsapp.com/send/?phone=6282281376072&text&type=phone_number&app_absent=0"
                    >
                        +6282281376072
                    </a>
                    {/* <a href="https://api.whatsapp.com/send?phone=15551234567">Send Message</a> */}
                </Typography>
            </Box>
        </Stack>
    );
};

export default Dashboard;

const InfoEl = () => {
    return (
        <>
            <section style={{ marginBottom: "10px", textAlign: "right" }}>
                {/* <Typography variant="h5">Info: </Typography> */}
                <Typography style={{ fontSize: "12px", color: "grey" }}>
                    22 dari 100 orang telah mengisi
                </Typography>
            </section>
            <label>
                <Typography>Isi total suara disini : </Typography>
            </label>
        </>
    );
};

const TopBarEl = ({ nama, username, handleLogout }) => {
    return (
        <Box
            sx={{
                color: "white",
                display: "flex",
                margin: "10px",
                alignItems: "center",
                height: "100px",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ display: "flex" }}>
                <PersonIcon
                    sx={{
                        backgroundColor: "white",
                        // color: "#6219B8",
                        color: "#091627",
                        width: "30px",
                        height: "30px",
                        borderRadius: "60px",
                        padding: "5px",
                        marginRight: "10px",
                    }}
                ></PersonIcon>
                <Box>
                    <Typography>{nama}</Typography>
                    <Typography>
                        id: <span>{username}</span>
                    </Typography>
                </Box>
            </Box>
            <Button
                onClick={handleLogout}
                style={{
                    marginRight: "20px",
                    color: "white",
                    display: "block",
                    textAlign: "center",
                }}
            >
                <LogoutIcon />
                <Typography sx={{ fontSize: "12px" }}>Logout</Typography>
            </Button>
        </Box>
    );
};
const StatEl = ({ nama, kota, kecamatan, kelurahan }) => {
    return (
        <Card
            sx={{
                borderRadius: "20px",
                padding: "20px",
            }}
            variant="outlined"
        >
            <Typography variant="h4">{nama}</Typography>
            <hr />

            <Box sx={{ marginTop: "20px" }}>
                <Typography variant="h5" color={"gray"}>
                    detail :
                </Typography>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "100px" }}>
                                <Typography>Kabupaten</Typography>
                            </td>
                            <td>
                                <Typography>: {kota}</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Kecamatan</Typography>
                            </td>
                            <td>
                                <Typography>: {kecamatan}</Typography>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Typography>Kelurahan</Typography>
                            </td>
                            <td>
                                <Typography>: {kelurahan}</Typography>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </Card>
    );
};
