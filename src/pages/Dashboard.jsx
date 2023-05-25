import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import LoadingModal from "../components/modals/LoadingModal";
import UsersTable from "../components/tables/UsersTable";
import JustificationStats from "../components/charts/CardUsageStatisticsAdmin";
import AppServices from "../services/AppServices";

const STATUS_OPTIONS = ["Tout", "A justifier", "Justifier", "Approuver"];

export default function Dashboard() {
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

  useEffect(() => {
    AppServices.post('/api', {
      action: 10
    }).then((response) => {
      setStats(response.data)
    })
  }, [])
  

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
          title="Presence"
          value={stats?.total_working}
        />

        <StatusCard
          icon="images/icons/icons8_purchase_order.svg"
          title="Absence"
          value={Math.abs(stats?.total_off_work)}
        />
        <StatusCard
          icon="images/icons/icons8_combo_chart.svg"
          title="Overtime"
          value={stats?.total_over_work}
        />

        <StatusCard
          icon="images/icons/icons8_purchase_order.svg"
          title="Absences injustifiées"
          value={stats?.total_justifications}
        />
        <div className="rounded-3xl overflow-hidden w-[100%]  shadow-lg bg-[#F7F9FB] relative">
          <div className="absolute left-10 top-6 flex items-center gap-3">
            <span className="text-[#1C1C1C] font-normal xl:text-lg text-[14px] ml-2 mr-8">
              Activités des 15 derniers jours
            </span>
            <span className="text-[#1C1C1C] font-normal xl:text-lg text-[14px] opacity-40">
            </span>
            
          </div>
          <JustificationStats />
        </div>
      </Box>
    </div>
  );
}
