import React from 'react';
import fondoLab from "../../../images/fondo_lab.svg";
import imgAprobado from "../../../images/aprobado.png";
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box, Grid} from "@mui/material";
import FooterComponent from "../../../components/Footer/FooterComponent";
import ModalOneActionComponent from "../../../components/Modals/ModalOneActionComponent";
import {useNavigate} from "react-router-dom";

const ApprovedValidation = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/validar_cas/visualizacion_correo");
  }

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
          <ModalOneActionComponent title={"¡Insumo Aprobado!"} img={imgAprobado} handleClick={handleNavigate} />
        </Grid>
      </Grid>
      <FooterComponent/>
    </Box>
  );
};

export default ApprovedValidation;