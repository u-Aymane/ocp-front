import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import LoadingModal from "../components/modals/LoadingModal";
import AppServices from "../services/AppServices";
import JusitifcationsTable from "../components/tables/JusitifcationsTable";
import UsersTable from "../components/tables/UsersTable";

const STATUS_OPTIONS = [];

export default function UserEdit() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({});
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
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <LoadingModal open={loading} />
      <form className="grid grid-cols-2 gap-4 mt-[4rem]" autoComplete="off">
        <div className="input-container">
          <label>Prenom</label>
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="input-container">
          <label>Nom</label>
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="input-container">
        <label>CIN</label>
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="input-container">
        <label>Matricule</label>
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="input-container">
        <label>Paiment par heurs</label>
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="input-container">
        <label>Plage Horaire</label>
          <div className="plage">
            <input
              type="time"
              className="h-10 border-2 border-gray-300 rounded-md px-[30px]"
            />
            <input
              type="time"
              className="h-10 border-2 border-gray-300 rounded-md px-[30px]"
            />
          </div>
        </div>

        <div className="col-span-2 mt-10">
          <button
            className="w-full h-10 bg-[#478c0e] text-white rounded-md"
          >
            Sauvgarder
          </button>
        </div>
      </form>
    </div>
  );
}
