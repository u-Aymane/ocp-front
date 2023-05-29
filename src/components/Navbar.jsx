import { useGlobalState } from "..";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { AiOutlineStar } from "react-icons/ai";

export default function Navbar() {
  const navigate = useNavigate();
  const [ui, setUi] = useGlobalState("ui");
  const [logo, setLogo] = useState("");
  const [name, setName] = useState(
    localStorage.getItem("first_name") ? localStorage.getItem("first_name") : ""
  );

  function openSidebar() {
    setUi((prev) => ({
      ...prev,
      isSidebarOpen: true,
    }));
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4 mt-[1rem]">
      <div className="flex gap-2 ml-[4rem]">
        <img src="images/iconHead.svg" alt="logo" className="w-[1rem] h-[1rem]" />
        <AiOutlineStar />
      </div>
        <h1 className="text-gray-400 flex items-center gap-4">
          Dashboard <span>/</span> <span className="text-black">default </span>
        </h1>
      </div>
      <hr className="mb-[3rem]" />
    </div>
  );
}
