import * as React from "react";
import Modal from "@mui/material/Modal";
import { Typography, Box } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    width: "calc(100% - 2rem)",
    maxWidth: "400px",
    bgcolor: "white",
    p: "25px",
    borderRadius: "20px",
};

export default function SelectNameFieldsModal({
    open = false,
    close,
    children,
}) {
    if (!open) return;

    return (
        <Modal open={open} onClose={close}>
            <Box sx={style}>
                <Typography
                    sx={{
                        fontFamily: "Public Sans",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                    }}
                >
                    Quels champs du fichier CSV sont le prénom et le nom
                </Typography>
                <Box sx={{ my: "30px" }}>{children}</Box>
            </Box>
        </Modal>
    );
}
