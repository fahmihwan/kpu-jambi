import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { Alert } from "@mui/material";

const Dashboard = ({
    item,
    isSubmit,
    kode_periode,
    qty,
    id_transaksi,
    flash,
}) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        qty: qty,
    });

    const [isEdit, setIsEdit] = useState(false);
    const handleLogout = () => {
        return Inertia.post("/user-tps/logout");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/user-tps/transaksi");
    };
    const handleEdit = async (e) => {
        e.preventDefault();
        await Inertia.put(`/user-tps/transaksi/${id_transaksi}`, data);
        setIsEdit(false);
    };
    return (
        <Stack
            sx={{
                position: "fixed",
                width: "100%",
                backgroundColor: "#091627",
                height: "100vh",
            }}
        >
            <TopBarEl nama={item?.saksi?.nama} handleLogout={handleLogout} />

            <Box
                sx={{
                    backgroundColor: "#e8eaf6",
                    height: "100vh",
                    padding: "20px",
                }}
            >
                {flash?.error_message !== null && (
                    <Alert severity="error" sx={{ margin: "5px" }}>
                        {flash?.error_message}
                    </Alert>
                )}

                {/* <InfoEl /> */}
                <StatEl
                    kode_periode={kode_periode}
                    nama={item?.tps?.nama}
                    kota={item?.tps?.kota}
                    kecamatan={item?.tps?.kecamatan}
                    kelurahan={item?.tps?.kelurahan}
                />

                <Box sx={{ marginTop: "20px" }}>
                    {isSubmit ? (
                        <>
                            <form onSubmit={handleEdit}>
                                <InfoEl />
                                <TextField
                                    label={"total suara"}
                                    type={"number"}
                                    disabled={!isEdit}
                                    sx={{
                                        width: "100%",
                                        marginTop: "5px",
                                        backgroundColor: "white",
                                        marginBottom: "10px",
                                    }}
                                    onChange={(e) =>
                                        setData("qty", e.target.value)
                                    }
                                    value={data.qty}
                                    variant="outlined"
                                />
                                <Button
                                    sx={{ marginRight: "5px" }}
                                    onClick={() => setIsEdit(!isEdit)}
                                    variant="outlined"
                                    color={isEdit ? "error" : "warning"}
                                >
                                    {isEdit ? "batal" : "edit"}
                                </Button>
                                {isEdit && (
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        variant="outlined"
                                    >
                                        Perbarui
                                    </Button>
                                )}
                            </form>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
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
                            <Button
                                disabled={processing}
                                type="submit"
                                variant="outlined"
                            >
                                Submit
                            </Button>
                        </form>
                    )}
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

const TopBarEl = ({ nama, handleLogout }) => {
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <PersonIcon
                    sx={{
                        backgroundColor: "white",

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
const StatEl = ({ nama, kota, kecamatan, kelurahan, kode_periode }) => {
    return (
        <Card
            sx={{
                borderRadius: "10px",
                padding: "20px",
            }}
            variant="outlined"
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography variant="h4">{nama}</Typography>
                <Typography
                    sx={{
                        background: "#091627",
                        color: "white",
                        borderRadius: "60px",
                        padding: "5px",
                        fontSize: "12px",
                    }}
                >
                    {kode_periode}
                </Typography>
            </Box>
            <hr />

            <Box sx={{ marginTop: "20px" }}>
                <Typography sx={{ fontSize: "12px" }} color={"gray"}>
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
