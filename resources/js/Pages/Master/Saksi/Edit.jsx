import { useForm } from "@inertiajs/inertia-react";
import { Box, Card, Switch } from "@mui/material";

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

const Edit = ({ tps, saksi }) => {
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [phone, setPhone] = useState("+62");
    const [listTps, setlistTps] = useState();
    useEffect(() => {
        let data = tps.map((d) => ({ value: d.id, label: d.nama }));
        setlistTps(data);
    }, []);

    const { data, setData, put, processing, errors, reset } = useForm({
        nama: saksi.nama,
        username: saksi.username,
        password: saksi.password,
        telp: saksi.telp,
        tps_id: saksi.tps_id,
    });
    useEffect(() => {
        if (!toggleSwitch) {
            setData("tps_id", saksi.tps_id);
        }
    }, [toggleSwitch]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/master/saksi/${saksi.id}`);
    };
    const label = { inputProps: { "aria-label": "Switch demo" } };
    return (
        <AuthenticatedLayout>
            <DivSpaceBetween>
                <h2>Saksi</h2>
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
                                    <h4>Pengguna</h4>
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
                                    <label htmlFor="">Edit Lokas TPS</label>{" "}
                                    <Switch
                                        {...label}
                                        onClick={() =>
                                            setToggleSwitch(!toggleSwitch)
                                        }
                                    />
                                    {toggleSwitch && (
                                        <DivFormControl>
                                            <SelectSearchEl
                                                options={listTps}
                                                nameData="kecamatan"
                                                handleChange={(e) =>
                                                    setData("tps_id", e.value)
                                                }
                                            />
                                        </DivFormControl>
                                    )}
                                </Grid2>
                                <Grid2 xs={6}>
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
                                </Grid2>
                            </Grid2>

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
    width: "100%";
`;
