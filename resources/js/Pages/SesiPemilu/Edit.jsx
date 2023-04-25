import { useForm } from "@inertiajs/inertia-react";
import { Button, Card, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import React from "react";
import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
} from "../../Components/InputCompt";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const Edit = ({ item, auth, sesi_share }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        kode: item.kode,
        tanggal: item.tanggal,
        keterangan: item.keterangan,
        custome_login_description: item.custome_login_description,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/periode-pemilu/${item.id}`);
    };
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Edit Periode Pemilu</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Saksi", href: "#" },
                    ]}
                />
            </DivSpaceBetween>

            <Grid2 container spacing={2}>
                <Grid2 item xs={12} md={8}>
                    <Card style={{ overflow: "inherit" }}>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                backgroundColor: "gainsboro",
                            }}
                        >
                            <p>Edit Akun</p>
                            <ButtonLinkEl
                                title="kembali"
                                href="/admin/periode-pemilu"
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
                                {errors?.kode && (
                                    <Typography sx={{ color: "red" }}>
                                        {errors?.kode}
                                    </Typography>
                                )}
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
                            <DivFormControl>
                                <InputEl
                                    title="custome login description"
                                    name="custome_login_description"
                                    handleChange={handleChange}
                                    value={data.custome_login_description}
                                />
                            </DivFormControl>

                            <Button
                                disabled={processing}
                                type="submit"
                                variant="contained"
                            >
                                Update
                            </Button>
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
