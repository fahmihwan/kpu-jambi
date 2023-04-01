import { Link } from "@inertiajs/inertia-react";
import {
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
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ButtonLinkEl } from "../../../Components/InputCompt";
import { BreadcrumbsEl } from "../../../Components/NavCompt";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";

const Index = ({ datas }) => {
    console.log(datas);
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
            <Card>
                <DivSpaceBetween
                    style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                        backgroundColor: "gainsboro",
                    }}
                >
                    <p>List Saksi</p>
                    <ButtonLinkEl
                        title="Tambah Data"
                        href="/admin/master/saksi/create"
                    />
                </DivSpaceBetween>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>TPS</TableCell>
                                <TableCell>Nama</TableCell>
                                <TableCell>Usernama</TableCell>
                                <TableCell>Password</TableCell>
                                <TableCell>Telp</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas?.map((d, i) => (
                                <TableRow
                                    key={i}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    {/* <TableCell>{datas.form}</TableCell> */}
                                    {/* <TableCell>{d.nama}</TableCell> */}
                                    {/* <TableCell>{d.nama}</TableCell> */}
                                    <TableCell>{1}</TableCell>
                                    <TableCell>{d.tps.nama}</TableCell>
                                    <TableCell>{d.nama}</TableCell>
                                    <TableCell>{d.username} tes</TableCell>

                                    <TableCell>{d.password}</TableCell>
                                    <TableCell>{d.telp}</TableCell>
                                </TableRow>
                            ))}
                            {/* {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.calories}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.fat}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.carbs}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.protein}
                                    </TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
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
