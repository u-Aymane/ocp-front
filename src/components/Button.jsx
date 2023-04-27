import { Button as MuiButton, CircularProgress } from "@mui/material";

export default function Button({
    children,
    sx,
    disabled,
    loading = false,
    rounded = "full",
    ...props
}) {
    return (
        <MuiButton
            sx={{
                background: "black",
                color: "white",
                borderRadius: rounded === "full" ? "40px" : "20px",
                height: "70px",
                textTransform: "none",
                fontWeight: "400",
                pointerEvents: disabled ? "none" : "auto",
                "&:hover": {
                    background: "rgba(0,0,0,0.9)",
                },
                px: "20px",
                py: "20px",
                fontSize: "18px",
                ...sx,
            }}
            {...props}
        >
            <span
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                }}
            >
                {loading && (
                    <>
                        <CircularProgress size={20} color="inherit" />
                        &nbsp;&nbsp;&nbsp;
                    </>
                )}
                {children}
            </span>
        </MuiButton>
    );
}
