import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import {Box, Typography} from "@mui/material";
import fondoNuevoInsumo from "./images/fondo_nuevo_insumo.jpg";
import FooterComponent from "../../components/Footer/FooterComponent";
import SimpleButtonComponent from "../../components/Buttons/SimpleButtonComponent";
import {useTranslation} from "react-i18next";

const NewChemical = () => {

  const [translate] = useTranslation("global");

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("newChemical.header")}/>
      <Box
        className={"config-img"}
        sx={{
          backgroundImage: `url(${fondoNuevoInsumo})`,
          width: "100%",
          height: "75vh",
          position: "relative"
        }}
      >
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
          <Box sx={{
            width: "400px",
            height: "300px",
            backgroundColor: "#92D050",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #1C7638",
            borderRadius: "20px"
          }}>
            <Typography variant={"h3"} color={"white"}>Formulario</Typography>
          </Box>
          <SimpleButtonComponent
            title={translate("newChemical.button1")}
            color={"#1C7638"}
          />
        </Box>
      </Box>
      <FooterComponent />
    </React.Fragment>
  );
};

export default NewChemical;