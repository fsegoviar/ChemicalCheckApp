import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import {Box, Button} from "@mui/material";
import fondoLab from "./images/fondo_validacion_periodica.jpg";
import iconLupa from "../../images/lupa.png";
import ListComponent from "../../components/List/ListComponent";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";

const AnalysisRegulations = () => {
  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={"Análisis por regulaciones"}/>
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
          }}
        >
          <Box sx={{display: "flex", alignItems: "center", marginTop: "10vh"}}>
            <input type="text" className="input-validate-CAS" placeholder="Buscar informes"/>
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
            height: "250px"
          }}>
            <ListComponent />
          </Box>
          <Box sx={{
            display: "flex",
          }}>
            <ButtonComponent title={"Incorporar datos al análisis"} color={"#20844E"}/>
          </Box>
        </Box>
      </Box>
      <FooterComponent />
    </React.Fragment>
  );
};

export default AnalysisRegulations;