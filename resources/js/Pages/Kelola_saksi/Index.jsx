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
import { ButtonLinkEl } from "../../Components/InputCompt";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";

const Index = ({ datas, auth, sesi_share }) => {
    console.log(datas);
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
                    <p>List Periode</p>
                    <ButtonLinkEl
                        title="Tambah Data"
                        href="/admin/kelola-saksi/create"
                    />
                </DivSpaceBetween>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>tps</TableCell>
                                <TableCell>saksi</TableCell>
                                <TableCell>username</TableCell>
                                <TableCell>password</TableCell>
                                <TableCell>telp</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {datas?.data?.map((d, i) => (
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
                                    <TableCell>{d.saksi}</TableCell>
                                    <TableCell>{d.username}</TableCell>
                                    <TableCell>{d.password}</TableCell>
                                    <TableCell>{d.telp}</TableCell>
                                    <TableCell>
                                        {/* <a
                                            target={"_blank"}
                                            href="https://api.whatsapp.com/send/?phone=628112952883&text=&type=phone_number&app_absent=0"
                                        >
                                            +6282281376072
                                        </a> */}
                                    </TableCell>
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
