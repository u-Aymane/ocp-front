import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    width: "100px",
    height: "100px",
    bgcolor: "white",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export default function Loading({ open }) {
    return (
        <Backdrop
            sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={open}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
}
