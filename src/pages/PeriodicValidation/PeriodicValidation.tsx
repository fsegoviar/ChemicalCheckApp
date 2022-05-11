import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import fondoLab from "./images/fondo_validacion_periodica.jpg";
import imgDefault from "../../images/default.jpg";
import {Box, Grid} from "@mui/material";
import FooterComponent from "../../components/Footer/FooterComponent";
import CardSectionComponent from "./components/CardSectionComponent";

const PeriodicValidation = () => {
  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"} />
      <Banner title={"Validación Periódica"} />
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
          <Grid container maxWidth={"xl"} direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={4} sx={{marginRight: "40px"}}>
            <CardSectionComponent
              imgDefault={imgDefault}
              title={"Análisis anual de laboratorio"}
              url={"analisis_anual"}
            />

          </Grid>
          <Grid item xs={4}>
            <CardSectionComponent
              imgDefault={imgDefault}
              title={"Análisis por regulaciones"}
              url={"analisis_por_regulaciones"}
            />
          </Grid>
        </Grid>
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default PeriodicValidation;