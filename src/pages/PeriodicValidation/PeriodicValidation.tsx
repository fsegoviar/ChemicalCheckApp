import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import fondoLab from "./images/fondo_validacion_periodica.jpg";
import imgDefault from "../../images/default.jpg";
import {Box, Grid} from "@mui/material";
import FooterComponent from "../../components/Footer/FooterComponent";
import CardSectionComponent from "./components/CardSectionComponent";
import {useTranslation} from "react-i18next";

const PeriodicValidation = () => {

  const [translate] = useTranslation("global");

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("periodicValidation.header")}/>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
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
                alignItems="center"
          >
            <Grid item xs={4} sx={{marginRight: "40px"}}>
              <CardSectionComponent
                imgDefault={imgDefault}
                title={translate("periodicValidation.section1")}
                url={"analisis_anual"}
              />

            </Grid>
            <Grid item xs={4}>
              <CardSectionComponent
                imgDefault={imgDefault}
                title={translate("periodicValidation.section2")}
                url={"analisis_por_regulaciones"}
              />
            </Grid>
            <Grid item xs={4}>
              <CardSectionComponent
                imgDefault={imgDefault}
                title={translate("periodicValidation.section3")}
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