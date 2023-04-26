import React from "react";
import { Link } from "@inertiajs/inertia-react";
import {
    Alert,
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
import { ButtonLinkEl } from "../../Components/InputCompt";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import styled from "styled-components";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ datas, auth, sesi_share, flash }) => {
    console.log(flash);
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Periode Pemilu</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "Periode Pemilu", href: "#" },
                    ]}
                />
            </DivSpaceBetween>
            {flash?.error_message && (
                <Alert severity="error" sx={{ marginBottom: "10px" }}>
                    {flash?.error_message}
                </Alert>
            )}

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
                                <TableCell>custome login description</TableCell>
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
                                        {d.custome_login_description}
                                    </TableCell>
                                    <TableCell sx={{ display: "flex" }}>
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
                                            onClick={() => {
                                                confirm(
                                                    "Apakah anda yakin ingin menghapus?"
                                                ) &&
                                                    Inertia.delete(
                                                        `/admin/periode-pemilu/${d.id}`
                                                    );
                                            }}
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
