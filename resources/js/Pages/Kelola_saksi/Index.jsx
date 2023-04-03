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

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ datas, auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <DivSpaceBetween>
                <h2>Kelola Saksi</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "Periode Pemilu", href: "#" },
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
                    <p>List Periode</p>
                    <ButtonLinkEl
                        title="Tambah Data"
                        href="/admin/periode-pemilu/create"
                    />
                </DivSpaceBetween>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>kode</TableCell>
                                <TableCell>Tanggal Pelaksanaan</TableCell>
                                <TableCell>keterangan</TableCell>
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
                                    <TableCell>{d.kode}</TableCell>
                                    <TableCell>{d.tanggal}</TableCell>
                                    <TableCell>{d.keterangan}</TableCell>
                                    <TableCell>
                                        <Link
                                            href={`/admin/periode-pemilu/${d.id}/edit`}
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
                                                Inertia.delete(
                                                    `/admin/periode-pemilu/${d.id}`
                                                )
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
