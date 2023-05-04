import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import LoadingModal from "../components/modals/LoadingModal";
import UsersTable from "../components/tables/UsersTable";
import JustificationStats from "../components/charts/CardUsageStatisticsAdmin";

const STATUS_OPTIONS = ["Tout", "A justifier", "Justifier", "Approuver"];

export default function Justification() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    total_commands: 151,
    total_vent: 29,
    open: 23155,
  });
  const [status, setStatus] = useState(0);
  const handleChange = (event, newValue) => {
    setStatus(newValue);
  };
  return (
    <div
      style={{
        paddingBottom: "62px",
        display: "flex",
        flexDirection: "column",
        width: "100% !important",
      }}
    >
      <LoadingModal open={loading} />
      <Box
        sx={{
          mb: "62px",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          gap: {
            xs: "1.5rem",
          },
        }}
      >
        <StatusCard
          icon="images/icons/icons8_combo_chart.svg"
          title="Total Justification"
          value={stats?.total_vent}
        />

        <StatusCard
          icon="images/icons/icons8_purchase_order.svg"
          title="Total a justifier"
          value={stats?.total_commands}
        />
        <StatusCard
          icon="images/icons/icons8_combo_chart.svg"
          title="Total Justification"
          value={stats?.total_vent}
        />

        <StatusCard
          icon="images/icons/icons8_purchase_order.svg"
          title="Total a justifier"
          value={stats?.total_commands}
        />
        <div className="rounded-3xl overflow-hidden w-[100%]  shadow-lg bg-[#F7F9FB] relative">
          <div className="absolute left-10 top-6 flex items-center gap-3">
            <span className="text-[#1C1C1C] font-normal xl:text-lg text-[14px] ml-2 mr-8">
              Total Users
            </span>
            <span className="text-[#1C1C1C] font-normal xl:text-lg text-[14px] opacity-40">
              Operating Status
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-[#000000] font-normal xl:text-lg text-[14px]  flex items-center gap-2">
              {/* add small dot */}
              <span className="w-[5px] h-[5px] rounded-full bg-black inline-block ml-2" />
              Current Week
            </span>
            <span className="text-black font-normal xl:text-lg text-[14px] flex items-center gap-2">
              {/* add small dot */}
              <span className="w-[5px] h-[5px] rounded-full bg-[#A8C5DA] inline-block ml-2" />
              Next Week
            </span>
          </div>
          <JustificationStats />
        </div>
      </Box>
    </div>
  );
}
