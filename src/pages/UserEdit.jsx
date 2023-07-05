import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import LoadingModal from "../components/modals/LoadingModal";
import AppServices from "../services/AppServices";
import JusitifcationsTable from "../components/tables/JusitifcationsTable";
import UsersTable from "../components/tables/UsersTable";
import { useParams } from "react-router-dom";
import { da } from "date-fns/locale";
import Popup from "../components/Popup";

const STATUS_OPTIONS = [];

export default function UserEdit() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)
  const [popupText, setPopupText] = useState("Votre opération est terminée avec succès! ✅")

  const [data, setData] = useState({})

  useEffect(() => {
    AppServices.post('/api', {
        action: 1,
        data: {
            id: id,
        }
    }).then((response) => {
      setData(response.data)
    })
  }, [])

  const handleSubmit = () => {
    AppServices.post('/api', {
        action: 2,
        data: {
          id: id,
          ...data,
          _id: undefined
        }
    }).then(() => setShow(true))
  }

  const changeHours = (index, key, e) => {
    let plage_horaire = data.plage_horaire
    plage_horaire[index] = {
      ...plage_horaire[index],
      [key]: e.target.value
    }

    setData({
      ...data,
      plage_horaire: plage_horaire
    })

    console.log(data, e.target.value)
  }
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }


  return (
    <div
      style={{
        paddingBottom: "62px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Popup show={show} setShow={setShow} text={popupText}/>

      <LoadingModal open={loading} />
      <div className="grid grid-cols-2 gap-4 mt-[4rem]" autoComplete="off">
        <div className="input-container">
          <label>Prenom</label>
          <input
            type="text"
            name="first_name"
            defaultValue={data.first_name}
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label>Nom</label>
          <input
            type="text"
            name="last_name"
            defaultValue={data.last_name}
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            onChange={handleChange}

          />
        </div>
        <div className="input-container">
        <label>CIN</label>
          <input
            type="text"
            name="cin"
            defaultValue={data.cin}
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            onChange={handleChange}

          />
        </div>
        <div className="input-container">
        <label>Matricule</label>
          <input
            type="text"
            name="matricule"
            defaultValue={data.matricule}
            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
            onChange={handleChange}

          />
        </div>
        <div className="input-container">
        <label>Paiment par heurs</label>
          <input
            type="text"
            name="salary_per_hour"
            defaultValue={data.salary_per_hour}
            onChange={handleChange}

            className="w-full h-10 border-2 border-gray-300 rounded-md px-2"
          />
        </div>
        <div className="input-container">
        <label>Plage Horaire</label>
          <div className="plage">
          <div className="plage-container">

          <label>Matin</label>
          <div className="timeframe">
            <input
              type="time"
              defaultValue={data.plage_horaire?.[0].from_time}
              onChange={(e) => changeHours(0, 'from_time', e)}

              className="h-10 border-2 border-gray-300 rounded-md px-[30px]"
            />
            <input
              type="time"
              defaultValue={data.plage_horaire?.[0].to_time}
              onChange={(e) => changeHours(0, 'to_time', e)}

              className="h-10 border-2 border-gray-300 rounded-md px-[30px]"
            />
            </div>
            </div>
            <div className="plage-container">
            <label>Après midi</label>
            <div className="timeframe">
            <input
              type="time"
              defaultValue={data.plage_horaire?.[1].from_time}
              onChange={(e) => changeHours(1, 'from_time', e)}

              className="h-10 border-2 border-gray-300 rounded-md px-[30px]"
            />
            <input
              type="time"
              defaultValue={data.plage_horaire?.[1].to_time}
              onChange={(e) => changeHours(1, 'to_time', e)}

              className="h-10 border-2 border-gray-300 rounded-md px-[30px]"
            />
            </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 mt-10">
          <button
            className="w-full h-10 bg-[#6CB92E] text-white rounded-md"
            onClick={handleSubmit}
          >
            Sauvgarder
          </button>
        </div>
      </div>
    </div>
  );
}
