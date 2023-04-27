import * as React from "react";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery } from "@mui/material";
import { useGlobalState } from "..";
import { v4 as uuid } from "uuid";

import { Link, useLocation } from "react-router-dom";
import isUser from "../helpers/userRole";

const drawerWidth = 240;

const links = [
  {
    id: uuid(),
    icon: "images/icons/bug.svg",
    message: "Vous avez une nouvelle demande de justification",
  },
  {
    id: uuid(),
    icon: "images/icons/bug.svg",
    message: "Vous avez une nouvelle demande de justification",
  },
  {
    id: uuid(),
    icon: "images/icons/bug.svg",
    message: "Vous avez une nouvelle demande de justification",
  },
];

export default function SideBarRight() {
  const location = useLocation();
  const [ui, setUi] = useGlobalState("ui");
  function closeMenu() {
    setUi((prev) => ({
      ...prev,
      isSidebarOpen: false,
    }));
  }
  const isScreenLg = useMediaQuery("(min-width: 1200px)");
  // function isActive(path) {
  //     return path === location.pathname;
  // }

  // add truncat to links messages
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        zIndex: "997",

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          border: "1px solid #E5E5E5",
          backgroundColor: "white",
        },
      }}
      variant={isScreenLg ? "permanent" : "temporary"}
      anchor="right"
      open={isScreenLg ? true : ui.isSidebarOpen}
      onClose={closeMenu}
    >
      <Box
        sx={{
          py: {
            xs: "10px",
            md: "20px",
          },
          px: "10px",
          display: "flex",

          userSelect: "none",
        }}
      >
        <h1>Notifications</h1>
      </Box>
      <List>
        {links.map((link) => (
          <ListItem
            key={link.id}
            sx={{
              py: "1px",
              px: "5px",
              display: "flex",
              justifyContent: "center",
              userSelect: "none",
            }}
          >
            <ListItemButton
              component={Link}
              to={link.path}
              sx={{
                py: "1px",
                px: "1px",
                display: "flex",
                justifyContent: "center",
                userSelect: "none",
              }}
            >
              <div className="px-2 py-2 rounded-lg bg-blue-100 mr-2">
                <img
                  src={link.icon}
                  alt={link.label}
                  className="bg-blue-200   rounded-lg  "
                />
              </div>
              <div className="flex flex-col">
                <ListItemText primary={truncate(link.message, 18)} />
                {/* add timing */}
                <ListItemText
                  primary="il y a 2 jours"
                  sx={{
                    fontSize: "10px",
                    color: "#9CA3AF",
                    mt: "-10px",
                  }}
                />
              </div>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
