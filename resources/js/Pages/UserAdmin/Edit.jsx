import { useForm } from "@inertiajs/inertia-react";
import { Card, Switch } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import React, { useState } from "react";
import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
} from "../../Components/InputCompt";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const Edit = ({ item, auth }) => {
    // const [toggleSwitch, setToggleSwitch] = useState(false);
    const { data, setData, put, processing, errors, reset } = useForm({
        nama: item.nama,
        username: item.username,
        toggleSwitch: false,
        password: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/akun/${item.id}`);
    };
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
        <AuthenticatedLayout auth={auth}>
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
                            <p>Edit Akun</p>
                            <ButtonLinkEl title="kembali" href="/admin/akun" />
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
                                <label htmlFor="">Edit Password</label>{" "}
                                <Switch
                                    {...label}
                                    onClick={() =>
                                        setData(
                                            "toggleSwitch",
                                            !data.toggleSwitch
                                        )
                                    }
                                />
                                {data.toggleSwitch && (
                                    <InputEl
                                        title="password"
                                        type="password"
                                        name="password"
                                        handleChange={handleChange}
                                        value={data.password}
                                    />
                                )}
                            </DivFormControl>
                            <ButtonSubmitEl />
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
`;
