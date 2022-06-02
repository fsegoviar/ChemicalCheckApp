import React, {useState} from 'react'
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import {Box, Button, styled} from "@mui/material";
import fondoLab from "./images/fondo_validacion_periodica.jpg";
import iconLupa from "../../images/lupa.png";
import ListComponent from "../../components/List/ListComponent";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {experimental_sx as sx} from "@mui/system";

const BackgroungHome = styled("div")(
  sx({
    backgroundImage: `url(${fondoLab})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  })
);

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
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/validacion_periodica"} displayHome={"block"}/>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "86vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Banner title={translate("updateRegulations.header")}/>
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
      <FooterComponent/>
    </BackgroungHome>
  )
}

/*<React.Fragment>
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
    </React.Fragment>*/
