import React from "react";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";

import { Box, Card } from "@mui/material";
import { BreadcrumbsEl } from "../Components/NavCompt";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import HomeIcon from "@mui/icons-material/Home";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import BadgeIcon from "@mui/icons-material/Badge";
import InventoryIcon from "@mui/icons-material/Inventory";
import BeenhereIcon from "@mui/icons-material/Beenhere";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Dashboard = ({
    auth,
    sesi_share,
    stat_suara,
    stat_tps,
    stat_saksi,
    sum_suara_perkecamatan,
    sum_suara_perkota,
    sudah_mengisi,
}) => {
    return (
        <AuthenticatedLayout auth={auth} share={sesi_share}>
            <DivSpaceBetween>
                <h2>Dashboard</h2>
                <BreadcrumbsEl list={[{ title: "Dashboard", href: "#" }]} />
            </DivSpaceBetween>
            {/* <Card> */}

            <Grid2 container spacing={2}>
                <Grid2 item xs={12} md={3}>
                    <Card
                        sx={{
                            padding: "20px",
                            // backgroundColor: "#84ffff",
                            borderBottom: "5px solid #9898e3",
                            display: "flex",
                            marginBottom: "10px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    marginBottom: "10px",
                                }}
                            >
                                {stat_suara}
                            </Typography>
                            <Typography> Total Suara</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <HomeIcon
                                sx={{ fontSize: "60px", color: "#a7a7a7" }}
                            />
                        </Box>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={3}>
                    <Card
                        sx={{
                            padding: "20px",
                            display: "flex",
                            // backgroundColor: "#e3f2fd",
                            borderBottom: "5px solid #9898e3",
                        }}
                    >
                        <Box
                            sx={{
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    marginBottom: "10px",
                                }}
                            >
                                {stat_saksi}
                            </Typography>
                            <Typography>Total Saksi </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <BadgeIcon
                                sx={{ fontSize: "60px", color: "#a7a7a7" }}
                            />
                        </Box>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={3}>
                    <Card
                        sx={{
                            padding: "20px",
                            display: "flex",
                            borderBottom: "5px solid #9898e3",
                        }}
                    >
                        <Box
                            sx={{
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    marginBottom: "10px",
                                }}
                            >
                                {stat_tps}
                            </Typography>
                            <Typography>Total TPS </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <InventoryIcon
                                sx={{ fontSize: "60px", color: "#a7a7a7" }}
                            />
                        </Box>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={3}>
                    <Card
                        sx={{
                            padding: "20px",
                            display: "flex",
                            borderBottom: "5px solid #9898e3",
                        }}
                    >
                        <Box
                            sx={{
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    marginBottom: "10px",
                                }}
                            >
                                {/* {stat_tps} */}
                                {sudah_mengisi}
                            </Typography>
                            <Typography>Sudah mengisi</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "50%",
                                justifyContent: "center",
                            }}
                        >
                            <BeenhereIcon
                                sx={{ fontSize: "60px", color: "#a7a7a7" }}
                            />
                        </Box>
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
                                // backgroundColor: "#F8F9FA",
                                borderBottom: "1px solid #dcdcdc",
                            }}
                        >
                            <p>Perolehan suara lingkup Kecamatan</p>
                        </DivSpaceBetween>
                        <ChartSuara datas={sum_suara_perkecamatan} />
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={6}>
                    <Card>
                        <DivSpaceBetween
                            style={{
                                padding: "10px",
                                borderBottom: "1px solid #dcdcdc",
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
