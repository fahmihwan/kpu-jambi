import {
    Card,
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
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const Laporan_suara = ({ datas, auth, sesi_share }) => {
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

    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Laporan Suara</h2>
                <BreadcrumbsEl list={[{ title: "List Suara", href: "#" }]} />
            </DivSpaceBetween>
            <Card>
                <DivSpaceBetween
                    style={{
                        padding: "10px",
                        backgroundColor: "#e0e0e0",
                    }}
                >
                    <p>List Suara</p>
                </DivSpaceBetween>

                <MUIDataTable
                    data={datas}
                    columns={columns}
                    options={options}
                />
                {/* <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>TPS</TableCell>
                                <TableCell>Alamat</TableCell>
                                <TableCell>Suara</TableCell>
                                <TableCell>Wakil</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas.data?.map((d, i) => (
                                <TableRow
                                    key={i}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>{datas.from + i}</TableCell>
                                    <TableCell>{d.tps}</TableCell>
                                    <TableCell>
                                        {d.kota} - {d.kecamatan} - {d.kelurahan}
                                    </TableCell>
                                    <TableCell>{d.qty}</TableCell>
                                    <TableCell>{d.saksi}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> */}
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
