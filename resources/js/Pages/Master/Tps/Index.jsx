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
        selectableRows: false,
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
                        backgroundColor: "#e0e0e0",
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
                {/* TABLE */}
                {/* <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
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
                                {datas
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((d, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell>{page + i}</TableCell>
                                            <TableCell>{d.nama}</TableCell>
                                            <TableCell>{d.kota}</TableCell>
                                            <TableCell>{d.kelurahan}</TableCell>
                                            <TableCell>{d.kecamatan}</TableCell>
                                            <TableCell>
                                                <Link
                                                    href={`/admin/master/tps/${d.id}/edit`}
                                                    style={{
                                                        marginRight: "5px",
                                                    }}
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
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={datas.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper> */}
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
