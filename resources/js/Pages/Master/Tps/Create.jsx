import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import {
    Card,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import axios from "axios";

import styled from "styled-components";
import {
    ButtonLinkEl,
    ButtonSubmitEl,
    InputEl,
    SelectSearchEl,
} from "../../../Components/InputCompt";
import { BreadcrumbsEl } from "../../../Components/NavCompt";
import AuthenticatedLayout from "../../../Layouts/AuthenticatedLayout";

// sds
import Select from "react-select";
import AsyncSelect from "react-select/async";

const Create = ({ api_kota }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        kota: "",
        kecamatan: "",
        kelurahan: "",
    });
    const [listApiCities, setApiCities] = useState(null);
    const [listApiDistricts, setApiDistricts] = useState(null);
    const [listApiVillage, setApiVillage] = useState(null);

    // disable
    const [disabledDistrict, setDisabledDistrict] = useState(true);
    const [disabledVillage, setDisabledVillage] = useState(true);

    useEffect(() => {
        let data = api_kota.map((d) => ({ value: d.id, label: d.name }));
        setApiCities(data);
    }, []);

    const handleCity = async (e) => {
        console.log(e);
        setData("kota", e.label);
        let res = await axios.get(`/admin/${e.value}/get-district`);
        let cek = await res.data?.map((d) => ({ value: d.id, label: d.name }));
        await setApiDistricts(cek);
        setDisabledDistrict(false);
    };
    const handleDistrict = async (e) => {
        setData("kecamatan", e.label);
        let res = await axios.get(`/admin/${e.value}/get-village`);
        let cek = await res.data?.map((d) => ({ value: d.id, label: d.name }));
        await setApiVillage(cek);
        setDisabledVillage(false);
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/master/tps");
    };

    return (
        <AuthenticatedLayout>
            <DivSpaceBetween>
                <h2>TPS</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Saksi", href: "#" },
                        { title: "Create", href: "#" },
                    ]}
                />
            </DivSpaceBetween>

            <Grid2 container spacing={2}>
                <Grid2 item xs={8}>
                    <Card style={{ overflow: "inherit" }}>
                        <DivSpaceBetween
                            style={{
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                backgroundColor: "gainsboro",
                            }}
                        >
                            <p>Create Saksi</p>
                            <ButtonLinkEl
                                title="kembali"
                                href="/admin/master/tps"
                            />
                        </DivSpaceBetween>
                        <form
                            onSubmit={handleSubmit}
                            style={{ padding: "20px" }}
                        >
                            <DivFormControl>
                                <InputEl
                                    title="nama"
                                    name="nama"
                                    handleChange={handleChange}
                                    value={data.nama}
                                />
                            </DivFormControl>
                            <DivFormControl>
                                <label htmlFor="">kota</label>
                                <SelectSearchEl
                                    options={listApiCities}
                                    nameData="kota"
                                    handleChange={handleCity}
                                    isDisabled={false}
                                />
                            </DivFormControl>
                            <DivFormControl>
                                <label htmlFor="">kecamatan</label>
                                <SelectSearchEl
                                    options={listApiDistricts}
                                    nameData="kecamatan"
                                    handleChange={handleDistrict}
                                    isDisabled={disabledDistrict}
                                />
                            </DivFormControl>
                            <DivFormControl>
                                <label htmlFor="">kelurahan</label>
                                <SelectSearchEl
                                    options={listApiVillage}
                                    nameData="kecamatan"
                                    handleChange={(e) =>
                                        setData("kelurahan", e.label)
                                    }
                                    isDisabled={disabledVillage}
                                />
                            </DivFormControl>
                            <ButtonSubmitEl />
                        </form>
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
    position: relative;
    z-index: 9999999999999999px;
`;
