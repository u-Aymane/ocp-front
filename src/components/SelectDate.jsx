import * as React from "react";
import TextField from "@mui/material/TextField";
// import AdapterJalali from "@date-io/date-fns-jalali";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import moment from "moment/moment";
import { fr } from 'date-fns/locale';

export default function SelectDate({ title, date, setDate }) {
    return (
        <Box>
            <Typography
                sx={{
                    fontWeight: "600",
                    fontSize: "19px",
                    color: "primary.main",
                    mb: 1,
                }}
            >
                {title}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}  locale={fr}>
                <DatePicker
                    inputFormat="dd/MM/yyyy"
                    value={date}
                    onChange={(newValue) => {
                        const dateObj = moment(newValue).format("YYYY-MM-DD");
                        setDate(dateObj);
                    }}
                    renderInput={(params) => {
                        return (
                            <TextField
                                size="small"
                                color="primary"
                                sx={{
                                    borderRadius: "8px",
                                }}
                                {...params}
                            />
                        );
                    }}
                />
            </LocalizationProvider>
        </Box>
    );
}
