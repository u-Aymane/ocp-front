import { Box, Typography } from "@mui/material";

export default function StatusCard({
  icon,
  title,
  value,
  percent = "",
  sx,
  lgMaxWidth = "280px",
}) {
  return (
    <Box
      sx={{
        p: "26px 22px",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        gap: "5px",
        background: "#A6F566",
        boxShadow: "0 2px 10px -2px hsla(0, 31%, 27%, 19%)",
        borderRadius: "28px",
        maxWidth: {
          xs: "auto",
          lg: lgMaxWidth,
          xl: "360px",
        },
        width: {
          xs: "100%",
        },
        ...sx,
      }}
    >
      <Box className="flex flex-col gap-5">
        <Typography
          className="status-title"
          sx={{ color: "#000000" }}
          fontWeight="400"
        >
          {title}
        </Typography>
        <Typography
          className="nb-value"
          sx={{ color: "#000" }}
          fontWeight="500"
          fontSize="22px"
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
