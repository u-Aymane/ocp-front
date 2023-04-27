import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

import { v4 as uuid } from "uuid";
import { Avatar, IconButton, Typography, InputAdornment } from "@mui/material";

import StatusLabel from "../StatusLabel";

import { useEffect, useState } from "react";

import LoadingModal from "../modals/LoadingModal";
import MoreOptions from "../ToggleActive";

let TABLE_HEAD = [
  { label: "ID Reclamation", align: "left" },
  { label: "Matricule", align: "left" },
  { label: "Date de reclamation", align: "left" },
  { label: "Date de justification", align: "center" },
  { label: "Justife", align: "left" },
  { label: "Status", align: "center" },
];

export default function UsersTable({ currentStats, isSuperAdmin, setData }) {
  const [users, setUsers] = useState([
    {
      id: "1",
      matricule: "MD150",
      date_reclamation: "2021-09-20",
      date_justification: "2021-09-20",
      justife: "justife",
      status: "En cours",
    },
    {
      id: "2",
      matricule: "MD150",
      date_reclamation: "2021-09-20",
      date_justification: "2021-09-20",
      justife: "justife",
      status: "En cours",
    },
    {
      id: "3",
      matricule: "MD150",
      date_reclamation: "2021-09-20",
      date_justification: "2021-09-20",
      justife: "justife",
      status: "En cours",
    },
  ]);

  const [loading, setLoading] = useState(false);
  const [dense, setDense] = useState(false);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        p: 2,
      }}
    >
      <LoadingModal open={loading} />

      <Box
        sx={{
          my: 3,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      ></Box>
      <TableContainer
        sx={{ maxWidth: "100% !important", whiteSpace: "nowrap" }}
      >
        <Table size={dense ? "small" : "medium"}>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  fontWeight: "700",
                  borderBottom: "1px dashed #CCB7B7",
                  color: "#4E3131",
                },
              }}
            >
              {TABLE_HEAD.map((item) => {
                if (!isSuperAdmin && item.label === "Profil") return null;
                return (
                  <TableCell key={uuid()} align={item.align}>
                    {item.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row) => (
              <TableRow
                key={uuid()}
                sx={{
                  "& tr, & td": {
                    borderBottom: "1px dashed #CCB7B7",
                    color: "black",
                  },
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell align="left">
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {row.id ? row.id : "-"}
                  </Box>
                </TableCell>
                <TableCell align="left">
                  {row.matricule ? row.matricule : "-"}
                </TableCell>

                <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                  {row.date_reclamation ? row.date_reclamation : "-"}
                </TableCell>

                <TableCell align="center">
                  {row.date_justification ? row.date_justification : "-"}
                </TableCell>
                <TableCell align="center">
                  {row.justife ? row.justife : "-"}
                </TableCell>
                <TableCell align="center">
                  <StatusLabel
                    color={row.status === "En cours" ? "warning" : "success"}
                  >
                    {row.status ? row.status : "-"}
                  </StatusLabel>
                </TableCell>

                <TableCell>
                  <MoreOptions hide={row.status === 1 || row.status === 2}>
                    {isSuperAdmin && (
                      <Box className="box">
                        <Typography fontSize="small">Traité</Typography>
                      </Box>
                    )}
                    {!isSuperAdmin && (
                      <Box className="box">
                        <Typography fontSize="small">
                          Modifier / Compléter
                        </Typography>
                      </Box>
                    )}
                    <Box className="box">
                      <Typography color="error" fontSize="small">
                        Supprimer
                      </Typography>
                    </Box>
                  </MoreOptions>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense"
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}

// function ViewStatus({ status }) {
//     let colors = {
//         suspendu: "error",
//         actif: "success",
//         onboarding: "warning",
//     };
//     return (
//         <StatusLabel color={colors[status.toLowerCase()]}>{status}</StatusLabel>
//     );
// }
