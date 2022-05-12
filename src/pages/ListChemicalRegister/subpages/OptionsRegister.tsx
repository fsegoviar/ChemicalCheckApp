import React from 'react';
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box} from "@mui/material";
import fondoLab from "../../../images/fondo_lab.svg";
import FooterComponent from "../../../components/Footer/FooterComponent";
import ModalTwoActionComponent from "../../../components/Modals/ModalTwoActionComponent";
import imgNewRegister from "../../../images/nuevoregistro.svg";
import {useNavigate} from "react-router-dom";

const OptionsRegister = () => {

  const navigate = useNavigate();

  const handleClickNewRegister = () => {
      navigate("/registrar_insumo");
  }

  const handleClickNewSearch = () => {
    navigate("/listado_insumos");
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
          marginTop: "5vh"
        }}>
          <ModalTwoActionComponent
            img={imgNewRegister}
            titleBtn1={"Registrar nuevo insumo"}
            color1={"#91BE33"}
            handleClick1={handleClickNewRegister}
            titleBtn2={"Nueva busqueda"}
            color2={"#91BE33"}
            handleClick2={handleClickNewSearch}
          />
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default OptionsRegister;