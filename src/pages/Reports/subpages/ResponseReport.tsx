import React from 'react';
import fondoLab from "../../../images/fondo_lab.svg";
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box, Grid} from "@mui/material";
import ModalCompleteActions from "../../../components/Modals/ModalCompleteActions";
import FooterComponent from "../../../components/Footer/FooterComponent";

const ResponseReport = () => {
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
      <NavBarComponent displayArrow={"block"}/>
      <Grid container justifyContent={"center"} sx={{ flex: "1 0 auto"}}>
        <Grid item xs={12} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <ModalCompleteActions title={"¡Informe listo!"}/>
        </Grid>
      </Grid>
      <FooterComponent/>
    </Box>
  );
};

export default ResponseReport;