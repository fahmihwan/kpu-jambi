import { useForm } from "@inertiajs/inertia-react";
import {
    Card,
    Table,
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Box,
    TextField,
    Alert,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
    SelectSearchClearSubmitEl,
} from "../../Components/InputCompt";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import DeleteIcon from "@mui/icons-material/Delete";
import { Inertia } from "@inertiajs/inertia";

const Create = ({ sesi_share, auth, saksi, tps, datas, flash }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        saksi_id: "",
        tps_id: "",
    });
    console.log(flash);

    const [listTps, setlistTps] = useState();
    const [listSaksi, setlistSaksi] = useState();

    const [listDatas, setlistDatas] = useState();

    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        setlistTps(tps.map((d) => ({ value: d.id, label: d.nama })));
        setlistSaksi(
            saksi.map((d) => ({ value: d.id, label: `${d.nama} (${d.telp})` }))
        );
        setlistDatas(datas);
    }, [datas]);

    const handleChangeSelect = (value, actionMeta) => {
        setData(actionMeta.name, value);
    };
    const handleDelete = async (id) => {
        await Inertia.delete(`/admin/kelola-saksi/create/${id}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await post("/admin/kelola-saksi");
        await setData({
            saksi_id: "",
            tps_id: "",
        });
    };

    // let listDatasFilter = listDatas;
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Kelola Saksi</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "List Wakil", href: "#" },
                        { title: "Create", href: "#" },
                    ]}
                />
            </DivSpaceBetween>

            <Grid2 container spacing={2}>
                <Grid2 item xs={5}>
                    <Card style={{ overflow: "inherit" }}>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                backgroundColor: "#e0e0e0",
                            }}
                        >
                            <p>Create Wakil</p>
                            <ButtonLinkEl
                                title="kembali"
                                href="/admin/kelola-saksi"
                            />
                        </DivSpaceBetween>
                        <form
                            onSubmit={handleSubmit}
                            style={{ padding: "20px" }}
                        >
                            {flash?.error_message && (
                                <Alert
                                    severity="error"
                                    sx={{ marginBottom: "10px" }}
                                >
                                    {flash?.error_message}
                                </Alert>
                            )}

                            <DivFormControl>
                                <label htmlFor="">Saksi</label>
                                <SelectSearchClearSubmitEl
                                    options={listSaksi}
                                    handleChangeSelect={(value, actionMeta) =>
                                        handleChangeSelect(value, actionMeta)
                                    }
                                    name={"saksi_id"}
                                    value={data.saksi_id}
                                />
                            </DivFormControl>
                            <DivFormControl>
                                <label htmlFor="">TPS</label>
                                <SelectSearchClearSubmitEl
                                    options={listTps}
                                    handleChangeSelect={(value, actionMeta) =>
                                        handleChangeSelect(value, actionMeta)
                                    }
                                    name={"tps_id"}
                                    value={data.tps_id}
                                />
                            </DivFormControl>

                            <ButtonSubmitEl disabled={processing} />
                        </form>
                    </Card>
                </Grid2>

                <Grid2 item xs={7}>
                    <Card style={{ overflow: "inherit" }}>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                backgroundColor: "#e0e0e0",
                            }}
                        >
                            <p>List Data</p>
                            <TextField
                                id={"serach"}
                                label={"cari berdasarkan tps / nama"}
                                type={"text"}
                                // backgroundColor="white"
                                sx={{ width: "50%", backgroundColor: "white" }}
                                autoComplete={"off"}
                                variant="outlined"
                                onChange={(e) => setInputSearch(e.target.value)}

                                // value={value}
                            />
                        </DivSpaceBetween>
                        <TableContainer
                            sx={{ height: "500px" }}
                            component={Paper}
                        >
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>saksi</TableCell>
                                        <TableCell>tps</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listDatas
                                        ?.filter(
                                            (d) =>
                                                d.saksi
                                                    .toLowerCase()
                                                    .includes(inputSearch) ||
                                                d.tps
                                                    .toLowerCase()
                                                    .includes(inputSearch)
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
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>{d.saksi}</TableCell>
                                                <TableCell>{d.tps}</TableCell>

                                                <TableCell>
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
                    </Card>
                </Grid2>
            </Grid2>
        </AuthenticatedLayout>
    );
};

export default Create;

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivFormControl = styled.div`
    margin-bottom: 20px;
`;
