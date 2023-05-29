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
        <div className="">
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            placeholder="First Name"
          />
        </div>
        <div className="">
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            placeholder="First Name"
          />
        </div>
        <div className="">
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            placeholder="First Name"
          />
        </div>
        <div className="">
          <input
            type="text"
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            placeholder="First Name"
          />
        </div>
        {/* add button  */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
