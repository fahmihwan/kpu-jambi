import { useForm } from "@inertiajs/inertia-react";
import { Card, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MuiTelInput } from "mui-tel-input";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
} from "../../Components/InputCompt";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const Create = ({ auth, sesi_share }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        kode: "",
        tanggal: "",
        keterangan: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/periode-pemilu");
    };
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Create Periode Pemilu</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Saksi", href: "#" },
                    ]}
                />
            </DivSpaceBetween>

            <Grid2 container spacing={2}>
                <Grid2 item xs={8}>
                    <Card style={{ overflow: "inherit" }}>
                        <DivSpaceBetween
                            style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                backgroundColor: "gainsboro",
                            }}
                        >
                            <p>Create Akun</p>
                            <ButtonLinkEl
                                title="kembali"
                                href="/admin/master/saksi"
                            />
                        </DivSpaceBetween>
                        <form
                            onSubmit={handleSubmit}
                            style={{ padding: "20px" }}
                        >
                            <DivFormControl>
                                <InputEl
                                    title="kode"
                                    name="kode"
                                    handleChange={handleChange}
                                    value={data.kode}
                                />
                            </DivFormControl>
                            <DivFormControl>
                                <InputEl
                                    title=""
                                    type="date"
                                    name="tanggal"
                                    handleChange={handleChange}
                                    value={data.tanggal}
                                />
                            </DivFormControl>
                            <DivFormControl>
                                <InputEl
                                    title="keterangan"
                                    name="keterangan"
                                    handleChange={handleChange}
                                    value={data.keterangan}
                                />
                            </DivFormControl>

                            <ButtonSubmitEl />
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
