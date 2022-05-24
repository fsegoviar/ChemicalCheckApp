import React from 'react';
import fondoLab from "../../../images/fondo_lab.svg";
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box, Grid} from "@mui/material";
import FooterComponent from "../../../components/Footer/FooterComponent";
import imgAprobado from "../../../images/aprobado.png";
import ModalTwoActionComponent from "../../../components/Modals/ModalTwoActionComponent";
import {useNavigate} from "react-router-dom";

const EmailApproved = () => {

  const navigate = useNavigate();

  const handleRegisterChemical = () => {
    navigate("/registrar_insumo")
  }

  const handleNewSearch = () => {
    navigate("/listado_insumos");
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
          <ModalTwoActionComponent
            title={"¡Correo enviado con éxito!"}
            img={imgAprobado}
            titleBtn1={"Registrar nuevo insumo"}
            color1={"#90BC1F"}
            handleClick1={handleRegisterChemical}
            titleBtn2={"Nueva busqueda"}
            color2={"#90BC1F"}
            handleClick2={handleNewSearch}
          />
        </Grid>
      </Grid>
      <FooterComponent/>
    </Box>
  );
};

export default EmailApproved;