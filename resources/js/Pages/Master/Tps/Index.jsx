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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ datas, auth, sesi_share }) => {
    const handleDelete = (id) => {
        confirm("apakah anda yakin ingin menghapus ? ") &&
            Inertia.delete(`/admin/master/tps/${id}`);
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
                        backgroundColor: "#e0e0e0",
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
                                <TableCell>#</TableCell>
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
                                    <TableCell>{datas.from + i}</TableCell>
                                    <TableCell>{d.nama}</TableCell>
                                    <TableCell>{d.kota}</TableCell>
                                    <TableCell>{d.kelurahan}</TableCell>
                                    <TableCell>{d.kecamatan}</TableCell>
                                    <TableCell>
                                        <Link
                                            href={`/admin/master/tps/${d.id}/edit`}
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
                                            onClick={() => handleDelete(d.id)}
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
