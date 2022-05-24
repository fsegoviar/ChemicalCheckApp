import React, {useState} from 'react'
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import {Box, Button} from "@mui/material";
import fondoLab from "./images/fondo_validacion_periodica.jpg";
import iconLupa from "../../images/lupa.png";
import ListComponent from "../../components/List/ListComponent";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

export const UpdateDataSupplier = () => {

  const [display, setDisplay] = useState("none");
  const [translate] = useTranslation("global");
  const navigate = useNavigate();

  const handleClick = () => {
    setDisplay("block");
  }

  const handleLoadMasive = () => {
    navigate("/carga_masiva")
  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("updateRegulations.header")}/>
      <Box
        className={"config-img"}
        sx={{
          backgroundImage: `url(${fondoLab})`,
          width: "100%",
          height: "75vh",
          position: "relative"
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{display: "flex", alignItems: "center"}}>
            <input type="text" className="input-validate-CAS" placeholder={translate("updateRegulations.input")}/>
            <Button sx={{
              backgroundColor: "green",
              backgroundImage: `url(${iconLupa})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "50px",
              height: "50px",
              "&:hover": {
                backgroundColor: "#91BE33"
              }
            }}></Button>
          </Box>
          <Box sx={{
            width: "600px",
            height: "250px",
            display: display
          }}>
            <ListComponent />
          </Box>
          <Box sx={{
            display: "flex",
          }}>
            <ButtonComponent title={translate("updateRegulations.button1")} color={"#20844E"} handleClick={handleClick}/>
            <ButtonComponent title={translate("anualAnalysis.button2")} color={"#20844E"} handleClick={handleLoadMasive}/>
          </Box>
        </Box>
      </Box>
      <FooterComponent />
    </React.Fragment>
  )
}
