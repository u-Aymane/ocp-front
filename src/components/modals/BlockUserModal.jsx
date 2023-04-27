import { Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
export default function BlockUserModal({
    open,
    close,
    name,
    userId,
    onConfirm,
}) {
    function handleConfirm() {
        onConfirm(userId);
        close();
    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    if (!open) return null;

    return (
        <Box
            sx={{
                position: "fixed",
                zIndex: "99999",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    alignItems: "center",
                    width: "calc(100% - 2rem)",
                    maxWidth: "400px",
                }}
            >
                <Typography
                    sx={{
                        marginTop: "40px",
                    }}
                >
                    Êtes-vous sûr de vouloir suspendre le profil de{" "}
                    <strong>{capitalizeFirstLetter(name)}</strong>
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: 5,
                    }}
                >
                    <Button
                        onClick={close}
                        sx={{ textTransform: "capitalize" }}
                    >
                        Fermer
                    </Button>
                    <Button
                        sx={{ textTransform: "capitalize" }}
                        color="error"
                        onClick={handleConfirm}
                    >
                        Suspendre
                    </Button>
                </Box>
            </div>
        </Box>
    );
}
