import { Link } from "@inertiajs/inertia-react";
import {
    Button,
    Card,
    Container,
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

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ datas, auth, sesi_share }) => {
    const handleDelete = (id) => {
        confirm("apakah anda yakin ingin menghapus ? ") &&
            Inertia.delete(`/admin/master/saksi/${id}`);
    };
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <Container sx={{ height: "100%" }}>
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
                            backgroundColor: "#e0e0e0",
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
                                    <TableCell>Nama</TableCell>
                                    <TableCell>Usernama</TableCell>
                                    <TableCell>Password</TableCell>
                                    <TableCell>Telp</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {datas?.data?.map((d, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell>{datas.from + i}</TableCell>

                                        <TableCell>{d.nama}</TableCell>
                                        <TableCell>{d.username}</TableCell>

                                        <TableCell>{d.password}</TableCell>
                                        <TableCell>{d.telp}</TableCell>
                                        <TableCell>
                                            <Link
                                                href={`/admin/master/saksi/${d.id}/edit`}
                                                style={{ marginRight: "5px" }}
                                            >
                                                <Button
                                                    variant="outlined"
                                                    color="warning"
                                                >
                                                    <EditIcon />
                                                </Button>
                                            </Link>

                                            <Button
                                                onClick={() =>
                                                    handleDelete(d.id)
                                                }
                                                color="error"
                                                variant="outlined"
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <Pagination count={1} variant="outlined" shape="rounded" /> */}
                </Card>
            </Container>
        </AuthenticatedLayout>
    );
};

export default Index;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
