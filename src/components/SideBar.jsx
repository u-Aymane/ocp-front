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
    path: "/",
    label: "Dashboard",
    icon: "images/icons/icons8_dashboard.svg",
    isActive(path) {
      return this.path === path;
    },
  },
  {
    id: uuid(),
    path: "/justification",
    label: "Justification",
    icon: "images/icons/food_bar.svg",
    isActive(path) {
      return this.path === path;
    },
  },
  {
    id: uuid(),
    path: "/Se déconnecter",
    label: "Se déconnecter",
    icon: "images/icons/icons8_waiter.svg",
    isActive(path) {
      return this.path === path;
    },
  },
  
];

export default function SideBar() {
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
          maxWidth: "230px",
        },
      }}
      variant={isScreenLg ? "permanent" : "temporary"}
      anchor="left"
      open={isScreenLg ? true : ui.isSidebarOpen}
      onClose={closeMenu}
    >
      <Box
        sx={{
          py: {
            xs: "50px",
            md: "80px",
          },
          px: "30px",
          display: "flex",
          justifyContent: "center",
          userSelect: "none",
        }}
      >
        <img style={{ width: 60 }} src="images/logo.svg" alt="logo" />
      </Box>
      <List>
        {links.map((link) => {
          const active = link.isActive
            ? link.isActive(location.pathname)
            : false;
          return (
            <ListItem
              onClick={() => {
                if (isScreenLg) return;
                closeMenu();
              }}
              key={link.id}
              disablePadding
              sx={{
                color: active ? "primary.light" : "#C9C9C9",
                "&:hover ": {
                  color: "primary.light",
                },
                "& .link-icon": {
                  opacity: active ? "1" : "0.7",
                },
                "&:hover .link-icon": {
                  opacity: "1",
                },
              }}
            >
              <Link
                to={link.path}
                style={{
                  position: "relative",
                  all: "unset",
                  display: "block",
                  width: "100%",
                  cursor: "default",
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      className="link-icon"
                      style={{ width: 20 }}
                      src={link.icon}
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      fontSize: "25px !important",
                      color: "#1C1C1C"
                    }}
                    primary={link.label}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
