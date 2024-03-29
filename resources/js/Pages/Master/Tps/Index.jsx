import { Link } from "@inertiajs/inertia-react";
import { Button, Card, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ButtonLinkEl } from "../../../Components/InputCompt";
import { BreadcrumbsEl } from "../../../Components/NavCompt";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Inertia } from "@inertiajs/inertia";

import MUIDataTable from "mui-datatables";

const Index = ({ datas, auth, sesi_share }) => {
    const handleDelete = (id) => {
        confirm("apakah anda yakin ingin menghapus ? ") &&
            Inertia.delete(`/admin/master/tps/${id}`);
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
            name: "kota",
            options: {
                filter: true,
            },
        },
        {
            name: "kecamatan",
            options: {
                filter: true,
            },
        },
        {
            name: "kelurahan",
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
                    <>
                        <Link
                            href={`/admin/master/tps/${tableMeta.rowData[5]}/edit`} //id
                            style={{
                                marginRight: "5px",
                            }}
                        >
                            <Button variant="outlined" color="warning">
                                <EditIcon />
                            </Button>
                        </Link>
                        <Button
                            onClick={() => handleDelete(tableMeta.rowData[5])}
                            color="error"
                            variant="outlined"
                        >
                            <DeleteIcon />
                        </Button>
                    </>
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
                <h2>TPS</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List TPS", href: "#" },
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
                    <p>List TPS</p>
                    <ButtonLinkEl
                        title="Tambah Data"
                        href="/admin/master/tps/create"
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
