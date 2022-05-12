import React from 'react';
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box} from "@mui/material";
import fondoLab from "../../../images/fondo_lab.svg";
import FooterComponent from "../../../components/Footer/FooterComponent";
import ModalOneActionComponent from "../../../components/Modals/ModalOneActionComponent";
import imgNoRegistrado from "../../../images/noregistrado.svg";
import {useNavigate} from "react-router-dom";
const NoRegister = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/listado_insumos/opcion_registro");
  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "80vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}>
        <Box sx={{
          width: "50%",
          height: "100%",
          marginTop:"5vh"
        }}>
          <ModalOneActionComponent
            title={"¡Este insumo no está registrado!"}
            img={imgNoRegistrado}
            handleClick={handleClick}
          />

        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default NoRegister;