import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import React from "react";

export default function SectionTitle({ title, icon }) {
    return (
        <Box sx={{ mb: "38px" }}>
            <Typography
                sx={{
                 
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "primary.main",
                    display: "flex",
                    gap: 1,
                }}
            >
                {icon}
                {title}
            </Typography>
        </Box>
    );
}
