import React from 'react';
import {styled} from "@mui/material";
import {Box, experimental_sx as sx} from "@mui/system";
import fondoLab from "../../ListChemicalRegister/images/fondo_listar_insumo.jpg";
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import FooterComponent from "../../../components/Footer/FooterComponent";

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

const EmailSend = () => {
  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/registrar_insumo"} displayHome={"block"}/>
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

      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default EmailSend;