import React from 'react';
import fondoLab from "../../../images/fondo_lab.svg";
import {Box, Grid} from "@mui/material";
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import FooterComponent from "../../../components/Footer/FooterComponent";
import ModalCompleteActions from "../../../components/Modals/ModalCompleteActions";

const ResultLoadMasive = () => {
  return (
    <Box className={"config-img"} sx={{
      backgroundImage: `url(${fondoLab})`,
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box"
    }}>
      <NavBarComponent displayArrow={"block"} returnTo={"/info_carga_masiva"}/>
      <Grid container justifyContent={"center"} sx={{ flex: "1 0 auto"}}>
        <Grid item xs={12} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <ModalCompleteActions title={"¡Reporte listo!"}/>
        </Grid>
      </Grid>
      <FooterComponent/>
    </Box>
  );
};

export default ResultLoadMasive;