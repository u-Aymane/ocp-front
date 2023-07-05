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
  { label: "ID Reclamation", align: "left" },
  { label: "Matricule", align: "left" },
  { label: "Date de reclamation", align: "center" },
  { label: "Date de justification", align: "center" },
  { label: "Heurs a jusitifee", align: "center" },
  { label: "Justife", align: "center" },
  { label: "Status", align: "center" },
  { label: "", align: "center" },
];

export default function JusitifcationsTable({ currentStats, isSuperAdmin, setData }) {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false)
  const [is_admin, setIsAdmin] = useGlobalState('is_admin')

  const [popupText, setPopupText] = useState("Votre opération est terminée avec succès! ✅")


  const getData = () => {
    AppServices.post('/api', {
      action: 11
    }).then((response) => {
      setUsers(response.data)
    })
  }

  useEffect(() => {
    getData()
    if(localStorage.getItem('is_admin') == 'true'){
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
            {users?.map((row, index) => (
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
                    {uuidv5(JSON.stringify(row._id), NIL_UUID).split("-")[0]}
                  </Box>
                </TableCell>
                <TableCell align="left">
                  {row.user.matricule ? row.user.matricule : "-"}
                </TableCell>

                <TableCell align="center" sx={{ whiteSpace: "nowrap" }}>
                  {row._id ? moment({
                    day: row._id.day,
                    month: row._id.month - 1,
                    year: row._id.year
                  }).format('DD-MM-YYYY') : "-"}
                </TableCell>

                <TableCell align="center">
                  {row.justifications?.length > 0 ? moment.utc(row.justifications.created_on).format('DD-MM-YYYY') : "-"}
                </TableCell>
                <TableCell align="center">
                  {row.total_hours_diff}
                </TableCell>
                <TableCell align="center">
                  <a className="table-link" href={row?.justifications?.length > 0 ? `http://127.0.0.1:8010/documents/${row?.justifications?.[row?.justifications?.length - 1].file}` : "-"}>{row?.justifications?.length > 0 ? "Document" : "-"}</a>
                </TableCell>
                <TableCell align="center">
                  <StatusLabel
                    color={row?.justifications?.length > 0 ? "success" : "warning"}
                  >
                    {row?.justifications?.length > 0 ? row?.justifications?.[row?.justifications?.length - 1]?.confirmed ? "Confirmée" : "Justifiée" : "Non justifiée"}
                  </StatusLabel>
                </TableCell>

                <TableCell>
                  <>
                  
                  {localStorage.getItem('is_admin') === 'false' ? <><label htmlFor={`upload-${index}`}><img src={"/images/upload.png"} width={25} className="upload"/></label>
                  <input type="file" id={`upload-${index}`} onChange={(e) => {upload(e.target.files[0], moment({
                    day: row._id.day,
                    month: row._id.month - 1,
                    year: row._id.year
                  }).format('YYYY-MM-DD'))}} /></>
                  
                  :
                  row?.justifications?.length > 0 ? <img className="upload" width={25} src={row?.justifications?.[row?.justifications?.length - 1]?.confirmed ? "/images/disapprove.png" : "/images/approve.png" }  onClick={() => changeJustifications(row?.justifications?.[row?.justifications?.length - 1])}/> : null}

                  </>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Box>
  );
}

