import { Link } from "@inertiajs/inertia-react";
import { Box, Button, Card, Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ButtonLinkEl } from "../../../Components/InputCompt";
import { BreadcrumbsEl } from "../../../Components/NavCompt";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Inertia } from "@inertiajs/inertia";
import MUIDataTable from "mui-datatables";
import { Typography } from "@mui/material";

const Index = ({ datas, auth, sesi_share }) => {
    const handleDelete = (id) => {
        confirm("apakah anda yakin ingin menghapus ? ") &&
            Inertia.delete(`/admin/master/saksi/${id}`);
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
            name: "nama",
            options: {
                filter: true,
            },
        },
        {
            name: "token",
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
        {
            name: "id",
            label: "Action",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <Box sx={{ display: "flex" }}>
                        <Link
                            href={`/admin/master/saksi/${tableMeta.rowData[4]}/edit`} //id
                            style={{
                                marginRight: "5px",
                            }}
                        >
                            <Button variant="outlined" color="warning">
                                <EditIcon />
                            </Button>
                        </Link>
                        <Button
                            onClick={() => handleDelete(tableMeta.rowData[4])}
                            color="error"
                            variant="outlined"
                        >
                            <DeleteIcon />
                        </Button>
                    </Box>
                ),
            },
        },
    ];

    const options = {
        selectableRows: "none",
        responsive: "standard",
        fixedHeader: true,
        fixedSelectColumn: true,
        tableBodyHeight: "400px",
    };

    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Saksi</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Saksi", href: "#" },
                    ]}
                />
            </DivSpaceBetween>
            <Card>
                <DivSpaceBetween
                    style={{
                        padding: "10px",
                        backgroundColor: "#F8F9FA",
                    }}
                >
                    <p>List saksi</p>
                    <ButtonLinkEl
                        title="Tambah Data"
                        href="/admin/master/saksi/create"
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
