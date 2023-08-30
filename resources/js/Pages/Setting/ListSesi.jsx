import React from "react";

import {
    Card,
    CardContent,
    Typography,
    Box,
    Radio,
    Button,
} from "@mui/material";
import { BreadcrumbsEl } from "../../Components/NavCompt";
import styled from "styled-components";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import DeleteIcon from "@mui/icons-material/Delete";

const ListSesi = ({ auth, datas, sesi_share }) => {
    const handleChange = (e) => {
        confirm("apakah anda yakin ingin mengubah sesi pemilu?") &&
            Inertia.put(`/admin/setting/${e.target.value}/update`);
    };

    const handleDelete = (id) => {
        const validate = "SAYA INGIN MENGHAPUSNYA";
        const promptCek = prompt(`masukan teks ini (${validate})`);
        if (promptCek == validate) {
            Inertia.delete(`/admin/setting/${id}/delete`);
        } else {
            alert("gagal menghapus!. pastikan teks sudah sesuai");
        }
    };
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween
                style={{
                    padding: "10px",
                    backgroundColor: "#F8F9FA",
                }}
            >
                <h2>Setting Periode</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Periode  ", href: "#" },
                    ]}
                />
            </DivSpaceBetween>
            <Card>
                <Box sx={{ padding: "20px" }}>
                    <Typography>Sesi pemilhan suara</Typography>
                    <Typography sx={{ color: "red" }}>
                        * Jangan mengubah sesi pada saat pemilihan suara
                        berlangsung
                    </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    {datas?.map((d, i) => (
                        <CardEl
                            handleChange={handleChange}
                            isChecked={d.isActive}
                            value={d.id}
                            key={i}
                            kode={d.kode}
                            tanggal={d.tanggal}
                            keterangan={d.keterangan}
                            handleDelete={() => handleDelete(d?.id)}
                        />
                    ))}
                </Box>
            </Card>
        </AuthenticatedLayout>
    );
};

export default ListSesi;

const CardEl = ({
    handleChange,
    isChecked,
    value,
    kode,
    tanggal,
    keterangan,
    handleDelete,
}) => {
    return (
        <CardContent
            sx={{
                backgroundColor: "#EDF1F3",
                margin: "10px",
                width: "200px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Typography variant="h5" color="text.secondary">
                    {kode}
                </Typography>

                <Radio
                    checked={isChecked == 1}
                    onChange={handleChange}
                    value={value}
                    name="is-active"
                />
            </Box>

            <Typography component="div">{tanggal}</Typography>

            <Typography variant="body2">{keterangan}</Typography>
            <Button
                onClick={handleDelete}
                style={{ marginTop: "20px", width: "100%" }}
                color="error"
                variant="outlined"
            >
                <DeleteIcon />
                Hapus Sesi
            </Button>
        </CardContent>
    );
};

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
