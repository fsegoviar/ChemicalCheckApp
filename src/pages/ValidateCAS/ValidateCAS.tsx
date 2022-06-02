import React, {useState} from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_validar_cas.jpg";
import {Box, Button, styled} from "@mui/material";
import iconLupa from "../../images/lupa.png";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import {useTranslation} from "react-i18next";
import ListComponent from "../../components/List/ListComponent";
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

const ValidateCas = () => {

  const [display, setDisplay] = useState("none");
  const [translate] = useTranslation("global");
  const navigate = useNavigate();

  const handleClick = () => {
    setDisplay("block");
  }

  const handleNavigate = () => {
    navigate("visualizacion_correo")
  }

  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
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
        <Banner title={translate("validateCAS.header")}/>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10vh"
          }}
        >
          <Box sx={{display: "flex", alignItems: "center"}}>
            <input type="text" className="input-validate-CAS" placeholder={translate("validateCAS.input")}/>
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
            }} onClick={handleClick}></Button>
          </Box>
          <Box sx={{
            width: "600px",
            display: display
          }}>
            <ListComponent />
          </Box>
          <ButtonComponent title={translate("validateCAS.button")} color={"#20844E"} handleClick={handleNavigate}/>
        </Box>
      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default ValidateCas;

/*<React.Fragment>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
      <Banner title={translate("validateCAS.header")}/>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "75vh",
        position: "relative"
      }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{display: "flex", alignItems: "center"}}>
            <input type="text" className="input-validate-CAS" placeholder={translate("validateCAS.input")}/>
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
            }} onClick={handleClick}></Button>
          </Box>
          <Box sx={{
            width: "600px",
            display: display
          }}>
            <ListComponent />
          </Box>
          <ButtonComponent title={translate("validateCAS.button")} color={"#20844E"} handleClick={handleNavigate}/>
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>*/