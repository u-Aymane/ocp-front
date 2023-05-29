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
import { v5 as uuidv5, NIL as NIL_UUID } from 'uuid';


import { v4 as uuid } from "uuid";
import { Avatar, IconButton, Typography, InputAdornment } from "@mui/material";

import StatusLabel from "../StatusLabel";

import { useEffect, useState } from "react";

import AppServices from "../../services/AppServices";
import moment from "moment/moment";
import Popup from "../Popup";
import { useGlobalState } from "../..";

let TABLE_HEAD = [
  { label: "ID", align: "left" },
  { label: "Prenom", align: "left" },
  { label: "Nom", align: "center" },
  { label: "Matricule", align: "center" },
  { label: "Paiments par heurs", align: "center" },
  { label: "CIN", align: "center" },
  { label: "Cree a", align: "center" },
  { label: "", align: "center" },
];

export default function UsersTable({ currentStats, isSuperAdmin, setData }) {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false)
  const [is_admin, setIsAdmin] = useGlobalState('is_admin')

  const [popupText, setPopupText] = useState("Votre opération est terminée avec succès! ✅")


  const getData = () => {
    AppServices.post('/api', {
      action: 12
    }).then((response) => {
      setUsers(response.data)
    })
  }

  useEffect(() => {
    getData()
    if( localStorage.getItem('is_admin') == 'true'){
      setIsAdmin(true)
    }
  }, [])

  const changeJustifications = (last_justification) => {
    AppServices.post('/api', {
      action: 8,
      data: {
        id: last_justification._id,
        confirmed: !last_justification.confirmed
      }
    }).then((response) => {
      getData()
      setShow(true)
    })
  }


  const upload = (file, date) => {
      AppServices.upload('/upload', file, {
        "Content-Type": file.type,
        "File-Extention": file.name.split(".")[1]
      }).then((response) => {
        AppServices.post('/api', {
          action: 6,
          data: {
            file: response.url,
            activity_date: date
          }
        }).then((response) => {
          getData()
          setShow(true)
        })
      })
  }
  

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        p: 2,
      }}
    >
      <Popup show={show} setShow={setShow} text={popupText}/>

      <Box
        sx={{
          my: 0,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      ></Box>
      <TableContainer
        sx={{ maxWidth: "100% !important", whiteSpace: "nowrap" }}
      >
        <Table >
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
                    {row._id}
                  </Box>
                </TableCell>
                <TableCell align="left">
                  {row?.first_name}
                </TableCell>

                <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                  {row?.last_name}
                </TableCell>

                <TableCell align="center">
                  {row?.matricule}
                </TableCell>
                <TableCell align="center">
                  {row?.salary_per_hour}
                </TableCell>
           
                <TableCell align="center">
                  {row?.cin}
                </TableCell>
                <TableCell align="center">
                  {moment.utc(row.created_on).format('DD-MM-YYYY')}
                </TableCell>
                <TableCell>
                <img className="upload" width={15} src="/images/edit.png"/> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Box>
  );
}

