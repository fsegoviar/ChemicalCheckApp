import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "../../images/fondo_lab.svg";
import {Box, Container} from "@mui/material";

const UpdateFormSupplier = () => {
  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={"Actualizar formulario proveedor"}/>
      <Box sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "70vh",
      }}>
        <Container maxWidth={"xl"} sx={{
          marginTop: "110px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>

        </Container>
      </Box>
      <FooterComponent />
    </React.Fragment>
  );
};

export default UpdateFormSupplier;