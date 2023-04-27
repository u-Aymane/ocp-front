import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initialState } from "./store";
import { createGlobalState } from "react-hooks-global-state";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import { Dashboard, Login } from "./pages";

export const { useGlobalState } = createGlobalState(initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="*"
            element={
              <h1
                style={{
                  textAlign: "center",
                  margin: "5rem auto",
                }}
              >
                404 Page non trouvée!
              </h1>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
