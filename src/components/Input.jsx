import TextFiled from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Box, FormLabel } from "@mui/material";
import { useState } from "react";

export default function Input({
  sx,
  error = "",
  mb = 2,
  rounded = "full",
  type = "text",
  ...props
}) {
  const [showPass, setShowPass] = useState(false);
  if (type === "password") {
    return (
      <Box
        sx={{
          position: "relative",
          window: "max-content",
          height: "max-content",
          "& .icon": {
            cursor: {
              md: "pointer",
            },
          },
          mb,
        }}
      >
        <span
          className="icon"
          style={{
            position: "absolute",
            zIndex: "10",
            top: "8px",
            right: "10px",
          }}
          onClick={() => setShowPass((prev) => !prev)}
        >
          {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </span>
        <TextFiled
          error={Boolean(error)}
          size="small"
          color={error ? "error" : "primary"}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                border: "none",
                borderBottom: "1px solid #B5B5B5",
              },
              borderBottom: "1px solid #B5B5B5",
            },
            mb,
            ...sx,
          }}
          type={showPass ? "text" : "password"}
          fullWidth={true}
          {...props}
          helperText={error}
        />
      </Box>
    );
  }
  return (
    <TextFiled
      error={Boolean(error)}
      size="small"
      color={error ? "error" : "primary"}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& > fieldset": {
            border: "none",
            borderBottom: "1px solid #B5B5B5",
          },
          borderBottom: "1px solid #B5B5B5",
        },
        mb,
        ...sx,
      }}
      type={type}
      fullWidth={true}
      {...props}
      helperText={error}
    />
  );
}

export function Label({ children, sx, ...props }) {
  return (
    <FormLabel
      sx={{
        display: "block",
        mb: 1,
        color: "black",
        ...sx,
      }}
      {...props}
    >
      {children}
    </FormLabel>
  );
}
