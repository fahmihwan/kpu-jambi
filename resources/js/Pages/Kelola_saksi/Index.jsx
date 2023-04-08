import { Link } from "@inertiajs/inertia-react";
import {
    Box,
    Button,
    Card,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import MUIDataTable from "mui-datatables";
import React from "react";
import styled from "styled-components";
import { ButtonLinkEl } from "../../Components/InputCompt";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const Index = ({ datas, auth, sesi_share }) => {
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
            name: "saksi",
            options: {
                filter: true,
            },
        },
        {
            name: "username",
            options: {
                filter: true,
            },
        },
        {
            name: "password",
            options: {
                filter: true,
            },
        },
        {
            name: "telp",
            options: {
                filter: true,
            },
        },
    ];

    const options = {
        selectableRows: false,
        responsive: "standard",
        fixedHeader: true,
        fixedSelectColumn: true,
        tableBodyHeight: "400px",
    };

    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>List Wakil</h2>
                <BreadcrumbsEl list={[{ title: "List Wakil", href: "#" }]} />
            </DivSpaceBetween>
            <Card>
                <DivSpaceBetween
                    style={{
                        padding: "10px",
                        backgroundColor: "#e0e0e0",
                    }}
                >
                    <p>List Wakil</p>
                    <ButtonLinkEl
                        title="Tambah Data"
                        href="/admin/kelola-saksi/create"
                    />
                </DivSpaceBetween>

                <MUIDataTable
                    data={datas}
                    columns={columns}
                    options={options}
                />
            </Card>
        </AuthenticatedLayout>
    );
};

export default Index;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
