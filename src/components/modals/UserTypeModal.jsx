import * as React from "react";
import Button from "../Button";
import Modal from "@mui/material/Modal";
import rightIcon from "../../assets/icons/arrow-right.svg";
import { IconButton, Typography, Box } from "@mui/material";

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

export default function UserTypeModal({ open = false, close, onSelect }) {
    if (!open) return;

    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    sx={{
                        color: "primary.main",
                        fontSize: 23,
                        mb: "25px",
                        fontWeight: "600",
                    }}
                    component="h4"
                >
                    Créer un utilisateur
                </Typography>
                <Typography
                    sx={{
                        mb: "25px",
                        fontFamily: "Public Sans",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "500",
                    }}
                >
                    Quel type d’utilisateur souhaites-tu créer?
                </Typography>
                <Box
                    sx={{
                        border: "1px solid #eee",
                        height: "44px",
                        px: 1,
                        borderRadius: "7px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        mb: 2,
                        "&:hover": {
                            background: "rgba(249,249,249)",
                        },
                    }}
                    onClick={() => {
                        close();
                        onSelect("particular");
                    }}
                >
                    Particulier
                    <IconButton>
                        <img style={{ width: "20px" }} src={rightIcon} />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        border: "1px solid #eee",
                        height: "44px",
                        px: 1,
                        borderRadius: "7px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        "&:hover": {
                            background: "rgba(249,249,249)",
                        },
                        mb: 4,
                    }}
                    onClick={() => {
                        close();
                        onSelect("company");
                    }}
                >
                    Entreprise
                    <IconButton>
                        <img style={{ width: "20px" }} src={rightIcon} />
                    </IconButton>
                </Box>
                <Button
                    rounded="small"
                    onClick={close}
                    sx={{ display: "block", mx: "auto" }}
                >
                    Annuler
                </Button>
            </Box>
        </Modal>
    );
}
