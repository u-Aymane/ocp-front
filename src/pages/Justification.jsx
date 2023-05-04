import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import LoadingModal from "../components/modals/LoadingModal";
import UsersTable from "../components/tables/UsersTable";

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
        <div className="rounded-3xl overflow-hidden w-full mt-[2rem] shadow-lg">
          <Box
            sx={{
              background: "white",
              boxShadow: "0 2px 10px rgba(89,47,47,.08)",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                bgcolor: "primary.light",
                px: 3,
              }}
            >
              <Tabs value={status} onChange={handleChange}>
                {STATUS_OPTIONS.map((option) => {
                  return (
                    <Tab
                      sx={{
                        textTransform: "capitalize",
                        color: "primary.dark",
                        fontFamily: "Public Sans",
                        fontWeight: "400",
                        fontSize: "17px",
                      }}
                      label={option}
                      key={option}
                    />
                  );
                })}
              </Tabs>
            </Box>
          </Box>
          <UsersTable currentStats={STATUS_OPTIONS[status]} />
        </div>
      </Box>
    </div>
  );
}
