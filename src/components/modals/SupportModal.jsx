import * as React from "react";
import Box from "@mui/material/Box";
import Button from "../Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SupportIcon from "@mui/icons-material/Support";

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
    borderRadius: "25px",
};

export default function SupportModal({ open = false, close }) {
    if (!open) return;

    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ mb: "25px", textAlign: "center" }}>
                    <SupportIcon
                        sx={{ fontSize: "35px", color: "primary.main" }}
                    />
                </Box>
                <Typography
                    sx={{
                        mb: "25px",
                        fontFamily: "Public Sans",
                        color: "black",
                        fontSize: "18px",
                    }}
                >
                    Pour toute demande d’assitance, merci de contacter M. Otman
                    HARRAK par :
                </Typography>
                <Typography
                    sx={{
                        mb: "25px",
                        fontFamily: "Public Sans",
                        color: "black",
                        fontSize: "18px",
                    }}
                >
                    <strong> Email: </strong> contact@getpopcard.com
                    <br />
                    <strong>Téléphone: </strong> 06 01 50 54 20
                </Typography>
                <Typography
                    sx={{
                        mb: "25px",
                        fontFamily: "Public Sans",
                        color: "black",
                        fontSize: "18px",
                    }}
                >
                    Du lundi au vendredi : 9h à 21h
                    <br /> Le samedi : 9h à 16h
                </Typography>
                <Button
                    rounded="small"
                    onClick={close}
                    sx={{ display: "block", mx: "auto" }}
                >
                    Fermer
                </Button>
            </Box>
        </Modal>
    );
}
