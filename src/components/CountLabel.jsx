import { Box } from "@mui/material";

export default function CountLabel({ count }) {
    return (
        <Box
            sx={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                bgcolor: "primary.main",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "0",
                m: "0",
                flexShrink: "0",
            }}
        >
            <span style={{ fontSize: count > 99 ? "13px" : "16px" }}>
                {count}
            </span>
        </Box>
    );
}
