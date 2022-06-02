import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import fondoLab from "./images/fondo_validacion_periodica.jpg";
import {Box, Grid, styled} from "@mui/material";
import FooterComponent from "../../components/Footer/FooterComponent";
import CardSectionComponent from "./components/CardSectionComponent";
import {useTranslation} from "react-i18next";
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

const PeriodicValidation = () => {

  const [translate] = useTranslation("global");

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
        <Grid container maxWidth={"xl"} direction="row"
              justifyContent="center"
              alignItems="center"
        >
          <Grid item xs={4} sx={{marginRight: "40px"}}>
            <CardSectionComponent
              title={translate("periodicValidation.section1")}
              url={"analisis_anual"}
            />

          </Grid>
          <Grid item xs={4}>
            <CardSectionComponent
              title={translate("periodicValidation.section2")}
              url={"analisis_por_regulaciones"}
            />
          </Grid>
          <Grid item xs={4}>
            <CardSectionComponent
              title={translate("periodicValidation.section3")}
              url={"actualizar_insumos"}
            />
          </Grid>
        </Grid>
      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default PeriodicValidation;

/*<Box className={"config-img"} sx={{
      backgroundImage: `url(${fondoLab})`,
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    }}>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
      <Banner title={translate("periodicValidation.header")}/>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 0 auto",
        }}
      >
        <Grid container maxWidth={"xl"} direction="row"
              justifyContent="center"
              alignItems="center"
        >
          <Grid item xs={4} sx={{marginRight: "40px"}}>
            <CardSectionComponent
              title={translate("periodicValidation.section1")}
              url={"analisis_anual"}
            />

          </Grid>
          <Grid item xs={4}>
            <CardSectionComponent
              title={translate("periodicValidation.section2")}
              url={"analisis_por_regulaciones"}
            />
          </Grid>
          <Grid item xs={4}>
            <CardSectionComponent
              title={translate("periodicValidation.section3")}
              url={"actualizar_insumos"}
            />
          </Grid>
        </Grid>
      </Box>
      <FooterComponent/>
    </Box>*/