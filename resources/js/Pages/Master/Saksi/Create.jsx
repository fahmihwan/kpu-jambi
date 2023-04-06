import { useForm } from "@inertiajs/inertia-react";
import { Card } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MuiTelInput } from "mui-tel-input";
import React from "react";
import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
} from "../../../Components/InputCompt";
import { BreadcrumbsEl } from "../../../Components/NavCompt";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";

const Create = ({ auth, sesi_share }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        username: "",
        password: "",
        telp: "+62",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/master/saksi");
    };
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Saksi</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Saksi", href: "#" },
                        { title: "Create", href: "#" },
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
                                    {/* <DivFormControl>
                                        <SelectSearchEl
                                            options={listTps}
                                            nameData="kecamatan"
                                            handleChange={(e) =>
                                                setData("tps_id", e.value)
                                            }
                                        />
                                    </DivFormControl> */}
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

export default Create;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivFormControl = styled.div`
    margin-bottom: 20px;
`;
