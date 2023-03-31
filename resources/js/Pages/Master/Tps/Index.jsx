import { Link } from "@inertiajs/inertia-react";
import {
    Button,
    Card,
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
    // console.log(datas);
    return (
        <AuthenticatedLayout>
            <DivSpaceBetween>
                <h2>TPS</h2>
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
                    <p>List TPS</p>
                    <ButtonLinkEl
                        title="Tambah Data"
                        href="/admin/master/tps/create"
                    />
                </DivSpaceBetween>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>nama</TableCell>
                                <TableCell>Kota</TableCell>
                                <TableCell>Kecamatan</TableCell>
                                <TableCell>Kelurahan</TableCell>
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
                                    <TableCell>{d.nama}</TableCell>
                                    <TableCell>{d.kota}</TableCell>
                                    <TableCell>{d.kelurahan}</TableCell>
                                    <TableCell>{d.kecamatan}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
