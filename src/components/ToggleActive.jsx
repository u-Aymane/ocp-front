import { IconButton, Typography, Box, Switch } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import { TfiMenuAlt } from "react-icons/tfi";
import { useEffect, useState } from "react";
export default function MoreOptions({
  id,
  toggleBlock,
  update,
  isActive,
  value,
  updateForm,
}) {
  const [pop, setPop] = useState(false);
  const [formChecked, setFormChecked] = useState(value);
  const [formValue, setFormValue] = useState(
    value === undefined ? false : value
  );
  const [switchClicked, setSwitchClicked] = useState(false);

  function toggleUserFormalair(e) {
    setFormChecked(e.target.checked);
    setFormValue(e.target.checked);
    setSwitchClicked(true);
    // setTimeOut
    console.log(e.target.checked);
  }

  useEffect(() => {
    console.log("formValue", formValue);
  }, [formValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!pop) {
        return;
      }

      const popoverNodes = document.querySelectorAll(".popover");
      const boxNodes = document.querySelectorAll(".box");

      if (!popoverNodes || !boxNodes) {
        return;
      }

      let popoverClicked = false;
      let boxClicked = false;

      for (const popoverNode of popoverNodes) {
        if (popoverNode.contains(event.target)) {
          popoverClicked = true;
          break;
        }
      }

      for (const boxNode of boxNodes) {
        if (boxNode.contains(event.target)) {
          boxClicked = true;
          break;
        }
      }

      if (!popoverClicked && !boxClicked) {
        setPop(false);

    
          updateForm(id, formValue);
        
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pop, formValue]);

  const correctValue = value === undefined ? false : value;
  return (
    <Box
      sx={{
        position: "relative",
        color: "black",
        zIndex: "999",
      }}
    >
      <IconButton
        size="small"
        sx={{
          position: "relative",
          color: "black",
        }}
      >
        <MoreVertIcon onClick={() => setPop(true)} />
      </IconButton>

      <Box
        className="popover"
        sx={{
          position: "absolute",
          top: "0%",
          right: "110%",
          transform: "translateY(-50%)",
          background: "white",
          boxShadow: "1px 2px 7px #eee",
          display: pop ? "flex" : "none",
          zIndex: "999",
          p: 1,
          alignItems: "center",
          borderRadius: "4px",
          cursor: "pointer",
          minWidth: "130px !important",
          flexDirection: "column",
          gap: "6px",
          "& .box": {
            borderRadius: "3px",
            display: "flex",
            gap: 1,
            padding: "6px",
            alignItems: "center",
            width: "100%",
          },
          "& .box:hover": {
            background: "#F1F1F1",
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "3px",
            display: "flex",
            gap: 1,
            padding: "6px",
            alignItems: "center",
            width: "100%",
          }}
          className="box"
        >
          <TfiMenuAlt className="bg-[#4E3131] p-[2px] text-white" />
          <Typography fontSize="small">Formulaire</Typography>
          <Switch
            checked={formChecked}
            value={correctValue}
            color="success"
            inputProps={{ "aria-label": "primary checkbox" }}
            onChange={toggleUserFormalair}
          />
        </Box>
        <Box className="box" onClick={() => update(id)}>
          <EditIcon fontSize="small" />
          <Typography fontSize="small">Éditer</Typography>
        </Box>
        {!isActive ? (
          <Box
            className="box"
            sx={{ color: "success" }}
            onClick={() => toggleBlock(id, isActive)}
          >
            <PlayArrowRoundedIcon fontSize="small" color="success" />
            <Typography fontSize="small" sx={{ color: "green" }}>
              Réactiver
            </Typography>
          </Box>
        ) : (
          <Box
            className="box"
            sx={{ color: "error" }}
            onClick={() => toggleBlock(id, isActive)}
          >
            <PauseRoundedIcon fontSize="small" color="error" />
            <Typography fontSize="small" color="error">
              Suspendre
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
