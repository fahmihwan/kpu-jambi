import { useForm } from "@inertiajs/inertia-react";
import { Alert, Card, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MuiTelInput } from "mui-tel-input";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
} from "../../../Components/InputCompt";
import { BreadcrumbsEl } from "../../../Components/NavCompt";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";
import axios from "axios";
import { AlertFail } from "../../../Components/AlertCompt";

const Create = ({ auth, sesi_share, flash }) => {
    const [telp, setTelp] = useState("+62");
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        token: "",
        telp: "+62",
    });
    useEffect(() => {
        setData("telp", telp.split(" ").join(""));
    }, [telp]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData("telp", data.telp.split(" ").join(""));
        post("/admin/master/saksi");
    };
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Saksi</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List saksi", href: "#" },
                        { title: "Tambah ", href: "#" },
                    ]}
                />
            </DivSpaceBetween>

            <Grid2 container spacing={2}>
                <Grid2 item xs={12} md={8}>
                    {/* {errors?.telp !== false ? (
                        <AlertFail message={"dsds"} />
                    ) : null} */}

                    <Card style={{ overflow: "inherit" }}>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                backgroundColor: "#F8F9FA",
                            }}
                        >
                            <p>Tambah saksi</p>
                            <ButtonLinkEl
                                title="kembali"
                                href="/admin/master/saksi"
                            />
                        </DivSpaceBetween>
                        <form
                            onSubmit={handleSubmit}
                            style={{ padding: "20px" }}
                        >
                            <Grid2 container spacing={3}>
                                <Grid2 xs={12} md={8}>
                                    {flash?.error_message && (
                                        <Alert
                                            severity="error"
                                            sx={{ marginBottom: "10px" }}
                                        >
                                            {flash?.error_message}
                                        </Alert>
                                    )}

                                    <h4 style={{ marginBottom: "10px" }}>
                                        Pengguna
                                    </h4>

                                    <DivFormControl>
                                        <InputEl
                                            title="nama"
                                            name="nama"
                                            autoComplete={"off"}
                                            handleChange={handleChange}
                                            value={data.nama}
                                        />{" "}
                                        {errors?.nama && (
                                            <Typography sx={{ color: "red" }}>
                                                {errors?.nama}
                                            </Typography>
                                        )}
                                    </DivFormControl>
                                    <DivFormControl>
                                        <MuiTelInput
                                            required
                                            autoComplete={"off"}
                                            placeholder="telp"
                                            forceCallingCode
                                            defaultCountry={"ID"}
                                            style={{ width: "100%" }}
                                            value={telp}
                                            onChange={(newPhone) =>
                                                setTelp(newPhone)
                                            }
                                        />
                                        {errors?.telp && (
                                            <Typography sx={{ color: "red" }}>
                                                {errors?.telp}
                                            </Typography>
                                        )}
                                    </DivFormControl>
                                </Grid2>
                                {/* <Grid2 xs={6}>
                                    <h4>Akun</h4>
                                    <DivFormControl>
                                        <InputEl
                                            title="username"
                                            name="username"
                                            handleChange={handleChange}
                                            value={data.username}
                                        />
                                    </DivFormControl>
                                    <DivFormControl>
                                        <InputEl
                                            title="password"
                                            name="password"
                                            handleChange={handleChange}
                                            value={data.password}
                                        />
                                    </DivFormControl>
                                </Grid2> */}
                            </Grid2>

                            <ButtonSubmitEl disabled={processing} />
                        </form>
                    </Card>
                </Grid2>
            </Grid2>
        </AuthenticatedLayout>
    );
};

export default Create;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivFormControl = styled.div`
    margin-bottom: 20px;
`;
