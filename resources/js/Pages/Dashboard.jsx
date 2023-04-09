import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";

import { Card } from "@mui/material";
import { BreadcrumbsEl } from "../Components/NavCompt";
import styled from "styled-components";

import { Box } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// 'stat_tps' => $stat_saksi,
//             'stat_tps' => $stat_tps,
//             'stat_suara' => $stat_suara,
const Dashboard = ({
    auth,
    sesi_share,
    // polar_area_charts,
    stat_suara,
    stat_tps,
    stat_saksi,
    sum_suara_perkecamatan,
    sum_suara_perkota,
}) => {
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Dashboard</h2>
                <BreadcrumbsEl
                    list={[
                        { title: "Master", href: "#" },
                        { title: "List Saksi", href: "#" },
                    ]}
                />
            </DivSpaceBetween>
            {/* <Card> */}

            <Grid2 container spacing={2}>
                <Grid2 item xs={6} md={2}>
                    <Card sx={{ padding: "20px", backgroundColor: "#84ffff" }}>
                        <Typography variant="h5">Total Suara </Typography>
                        <Typography> {stat_suara}</Typography>
                    </Card>
                </Grid2>
                <Grid2 item xs={6} md={2}>
                    <Card sx={{ padding: "20px", backgroundColor: "#e3f2fd" }}>
                        <Typography variant="h5">Total Saksi</Typography>
                        <Typography> {stat_saksi}</Typography>
                    </Card>
                </Grid2>
                <Grid2 item xs={6} md={2}>
                    <Card sx={{ padding: "20px", backgroundColor: "#e0f7fa" }}>
                        <Typography variant="h5">Total TPS</Typography>
                        <Typography> {stat_tps}</Typography>
                    </Card>
                </Grid2>
            </Grid2>
            {/*  */}
            <Grid2 container spacing={2}>
                <Grid2 item xs={12} md={6}>
                    <Card>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                backgroundColor: "#F8F9FA",
                            }}
                        >
                            <p>Perolehan suara lingkup Kecamatan</p>
                        </DivSpaceBetween>
                        {/* <Typography variant="h5">Total Suara </Typography>
                        <Typography> 10000</Typography> */}
                        <ChartSuara datas={sum_suara_perkecamatan} />
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={6}>
                    <Card>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                backgroundColor: "#F8F9FA",
                            }}
                        >
                            <p>Perolehan suara lingkup Kota</p>
                        </DivSpaceBetween>
                        <ChartSuara datas={sum_suara_perkota} />
                    </Card>
                </Grid2>
            </Grid2>
            {/* </Card> */}
        </AuthenticatedLayout>
    );
};

export default Dashboard;

const ChartSuara = ({ datas }) => {
    const labels = datas.map((d) => d.daerah);
    const qtys = datas.map((d) => d.totals);

    // console.log(labels);
    const suaraKecamatanData = {
        labels: labels,
        datasets: [
            {
                label: "suara:",
                data: qtys,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return <PolarArea data={suaraKecamatanData} />;
};

const DivSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
