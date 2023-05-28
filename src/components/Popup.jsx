import { Box, Typography } from "@mui/material";
import Button from "./Button";

export default function Popup({ text, show, setShow }) {
    const handleClick = () => {
        setShow(false)
    }
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
                display: show ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "200px",
            
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
                }}
            >
                <Typography
                    sx={{
                        marginTop: "40px",
                    }}
                >
                    {text}
                </Typography>
                <button
                    className="bg-[#6CB92E] w-[80%] text-white py-2 px-4 rounded-[10px] focus:outline-none "
                    onClick={handleClick}
                >Terminer</button>
            </div>
        </Box>
    );
}
