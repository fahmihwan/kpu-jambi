import { Card, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React from "react";
import styled from "styled-components";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const Laporan_suara = ({ datas, auth, sesi_share, belum_mengisi }) => {
    const options = {
        selectableRows: false,
        responsive: "standard",
        fixedHeader: true,
        fixedSelectColumn: true,
        tableBodyHeight: "400px",
    };
    const columns = [
        {
            name: "#",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <Typography>{tableMeta.rowIndex + 1}</Typography>
                ),
            },
        },
        {
            name: "tps",
            options: {
                filter: true,
            },
        },
        {
            name: "qty",
            label: "suara",
            options: {
                filter: true,
            },
        },
        {
            name: "alamat",
            label: "alamat",
            options: {
                filter: true,
            },
        },
        {
            name: "saksi",
            options: {
                filter: true,
            },
        },
    ];
    const columnsBelumMengisi = [
        {
            name: "#",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <Typography>{tableMeta.rowIndex + 1}</Typography>
                ),
            },
        },
        {
            name: "tps",
            options: {
                filter: true,
            },
        },
        {
            name: "alamat",
            options: {
                filter: true,
            },
        },
        {
            name: "telp",
            label: "telp",
            options: {
                filter: true,
            },
        },

        {
            name: "saksi",
            options: {
                filter: true,
            },
        },
    ];

    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Laporan Suara</h2>
                <BreadcrumbsEl list={[{ title: "List Suara", href: "#" }]} />
            </DivSpaceBetween>
            <Card sx={{ marginBottom: "20px" }}>
                <DivSpaceBetween
                    style={{
                        padding: "10px",
                        backgroundColor: "#F8F9FA",
                    }}
                >
                    <p>List sudah mengisi</p>
                </DivSpaceBetween>

                <MUIDataTable
                    data={datas}
                    columns={columns}
                    options={options}
                />
            </Card>
            <Card>
                <DivSpaceBetween
                    style={{
                        padding: "10px",
                        backgroundColor: "#F8F9FA",
                    }}
                >
                    <p>List belum mengisi</p>
                </DivSpaceBetween>

                <MUIDataTable
                    data={belum_mengisi}
                    columns={columnsBelumMengisi}
                    options={options}
                />
            </Card>
        </AuthenticatedLayout>
    );
};

export default Laporan_suara;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
