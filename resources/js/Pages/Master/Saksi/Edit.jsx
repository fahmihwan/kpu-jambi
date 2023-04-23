import { useForm } from "@inertiajs/inertia-react";
import { Box, Card, Switch, Typography } from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MuiTelInput } from "mui-tel-input";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
    SelectSearchEl,
} from "../../../Components/InputCompt";
import { BreadcrumbsEl } from "../../../Components/NavCompt";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";

const Edit = ({ saksi, auth, sesi_share }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        nama: saksi.nama,
        token: saksi.token,
        telp: saksi.telp,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/master/saksi/${saksi.id}`);
    };
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Saksi</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Saksi", href: "#" },
                        { title: "Edit", href: "#" },
                    ]}
                />
            </DivSpaceBetween>

            <Grid2 container spacing={2}>
                <Grid2 item xs={8}>
                    <Card style={{ overflow: "inherit" }}>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                backgroundColor: "#e0e0e0",
                            }}
                        >
                            <p>Create Saksi</p>
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
                                <Grid2 xs={6}>
                                    <Typography
                                        variant="h5"
                                        sx={{ marginBottom: "10px" }}
                                    >
                                        Pengguna
                                    </Typography>
                                    <DivFormControl>
                                        <InputEl
                                            title="nama"
                                            name="nama"
                                            handleChange={handleChange}
                                            value={data.nama}
                                        />
                                    </DivFormControl>
                                    <DivFormControl>
                                        <MuiTelInput
                                            forceCallingCode
                                            defaultCountry={"ID"}
                                            style={{ width: "100%" }}
                                            value={data.telp}
                                            onChange={(newPhone) =>
                                                setData("telp", newPhone)
                                            }
                                        />
                                    </DivFormControl>
                                </Grid2>
                                <Grid2 xs={6}>
                                    <Typography
                                        variant="h5"
                                        sx={{ marginBottom: "10px" }}
                                    >
                                        Akun
                                    </Typography>
                                    <DivFormControl>
                                        <InputEl
                                            title="token"
                                            name="token"
                                            disabled={true}
                                            value={data.token}
                                        />
                                    </DivFormControl>
                                </Grid2>
                            </Grid2>

                            <ButtonSubmitEl disabled={processing} />
                        </form>
                    </Card>
                </Grid2>
            </Grid2>
        </AuthenticatedLayout>
    );
};

export default Edit;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivFormControl = styled.div`
    margin-bottom: 20px;
    width: "100%";
`;
