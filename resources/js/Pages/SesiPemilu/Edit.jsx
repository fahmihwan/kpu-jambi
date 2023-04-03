import { useForm } from "@inertiajs/inertia-react";
import { Card } from "@mui/material";
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

const Edit = ({ item, auth }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        kode: item.kode,
        tanggal: item.tanggal,
        keterangan: item.keterangan,
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/periode-pemilu/${item.id}`);
    };
    return (
        <AuthenticatedLayout auth={auth}>
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

export default Edit;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivFormControl = styled.div`
    margin-bottom: 20px;
`;
