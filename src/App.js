import { Box } from "@mui/system";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import SideBarRight from "./components/SideBarRight";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
        navigate("/login");
    }
  }, []);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#ffffff",
        display: "flex",
      }}
    >
      <SideBar />

      <Box
        sx={{
          maxWidth: {
            lg: "calc(1400px - 240px)",
            xl: "1200px",
          },
          width: "100%",
          mx: "auto",
          px: {
            xs: "1rem",
            lg: "2rem",
          },
          mb: "4rem",
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
      <SideBarRight />
    </Box>
  );
}

export default App;
