import { useForm } from "@inertiajs/inertia-react";
import { Card } from "@mui/material";
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

const Create = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/akun");
    };
    return (
        <AuthenticatedLayout>
            <DivSpaceBetween>
                <h2>Akun</h2>
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
                                    title="nama"
                                    name="nama"
                                    handleChange={handleChange}
                                    value={data.nama}
                                />
                            </DivFormControl>
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
                                    type="password"
                                    name="password"
                                    handleChange={handleChange}
                                    value={data.password}
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
