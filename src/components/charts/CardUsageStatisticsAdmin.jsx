import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import AppServices from "../../services/AppServices";

export default function JustificationStats() {
  const [dataArray, setData] = useState([])
  const date_now = new Date();
  const date_before = new Date();
  date_before.setDate(date_now.getDate() - 15);
  const [startDate, setStartDate] = useState(
    date_before.toISOString().split("T")[0]
  );
  const [endDate, setEndDate] = useState(date_now.toISOString().split("T")[0]);


  const getDates = () => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const dates = [];
    for (let i = 0; i <= diffDays; i++) {
      dates.push(new Date(date1.getTime() + i * 24 * 60 * 60 * 1000));
    }
    return dates;
  };
 

  let ArrayofDate = [];

  useEffect(() => {
    getDates().map((item) => {   
      ArrayofDate.push(
        `${item.getFullYear()}-${item.getMonth() + 1}-${item.getDate()}`
      );
    });
  }, []);


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
        name: "Heures travaillées",
        data: []
      },
    ],
  });

  useEffect(() => {
    AppServices.post('/api', {
      action: 9
    }).then((response) => {
      setChartData({
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
            categories: ArrayofDate.map((item) => {
              const date = new Date(item);
              const month = date.toLocaleString("default", {
                month: "short",
              });
              return `${date.getDate()} ${month} ${date.getFullYear()}`;
            }),
          },
          stroke: {
            curve: "smooth",
          },
          colors: ["#000000", "#dadedf", "#999999"],
        },
        series: [
          {
            name: "Heures travaillées",
            data: ArrayofDate.map((item) => {
              return (
                response?.data.find((element) => {
                  const date = `${element._id.year}-${element._id.month}-${element._id.day}`;
                  return date === item;
                })?.total_hours_diff || 0
              );
            }),
          },
          
        ],
      })
    })
  }, [])
  

  // set data inside setChart

  return (
    <Box
      sx={{
        p: {
          xs: "4rem",
        },
        mt: "10px",
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
