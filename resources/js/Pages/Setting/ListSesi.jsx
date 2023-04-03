import React from "react";

import { Card, CardContent, Typography, Box, Radio } from "@mui/material";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import styled from "styled-components";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

const ListSesi = ({ auth, datas }) => {
    const handleChange = (e) => {
        Inertia.put(`/admin/setting/${e.target.value}/update`);
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <DivSpaceBetween>
                <h2>Setting Periode</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Periode  ", href: "#" },
                    ]}
                />
            </DivSpaceBetween>
            <Card>
                <Box sx={{ padding: "20px" }}>
                    <Typography>Fahimi Ichwanurrohm</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    {datas?.map((d, i) => (
                        <CardEl
                            handleChange={handleChange}
                            checked={d.isActive}
                            value={d.id}
                            key={i}
                            kode={d.kode}
                            tanggal={d.tanggal}
                            keterangan={d.keterangan}
                        />
                    ))}
                </Box>
            </Card>
        </AuthenticatedLayout>
    );
};

export default ListSesi;

const CardEl = ({
    handleChange,
    checked,
    value,
    kode,
    tanggal,
    keterangan,
}) => {
    return (
        <CardContent
            sx={{
                backgroundColor: "#EDF1F3",
                margin: "10px",
                width: "200px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Typography variant="h5" color="text.secondary">
                    {kode}
                </Typography>

                <Radio
                    checked={checked ? true : false}
                    onChange={handleChange}
                    value={value}
                    name="isActive"
                />
            </Box>

            <Typography component="div">{tanggal}</Typography>

            <Typography variant="body2">{keterangan}</Typography>
        </CardContent>
    );
};

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
