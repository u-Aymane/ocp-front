import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import AppServices from "../../services/AppServices";

export default function JustificationStats() {
  const date_now = new Date();
  const date_before = new Date();
  date_before.setDate(date_now.getDate() - 6);
  const [startDate, setStartDate] = useState(
    date_before.toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(date_now.toISOString().split("T")[0]);

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: { show: false },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
      },
      xaxis: {
        categories: [],
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#000000", "#dadedf", "#999999"],
    },
    series: [
      {
        name: "Ajout aux contacts",
        data: [62, 69, 91, 10, 41, 35, 51, 49],
      },
    ],
  });

  // set data inside setChart

  return (
    <Box
      sx={{
        p: {
          xs: "1rem",
          md: "45px 35px",
        },
        mb: "43px",
        background: "#F7F9FB",
        borderRadius: "28px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          mb: 4,
        }}
      ></Box>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
      />
    </Box>
  );
}
