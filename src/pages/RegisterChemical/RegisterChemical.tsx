import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_section_register.jpg";
import {Box} from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import {useTranslation} from "react-i18next";

const RegisterChemical = () => {

  const [translate] = useTranslation("global");

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("registerChemical.header")}/>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "75vh",
        position: "relative"
      }}>
        <Box sx={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          position: "absolute",
          top:0,
          left: 0,
          opacity: "0.2"

        }}></Box>
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
          <ButtonComponent
            title={translate("registerChemical.button1")}
            url={"nuevo_registro"}
            color={"#92D050"}
          />
          <ButtonComponent
            title={translate("registerChemical.button2")}
            url={"revisar_solicitud"}
            color={"#1C7638"}
          />
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default RegisterChemical;