import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_validar_cas.jpg";
import {Box, Button} from "@mui/material";
import iconLupa from "../../images/lupa.png";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import ListComponent from "../../components/List/ListComponent";
const ValidateCas = () => {
  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={"Validar CAS"}/>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "75vh",
        position: "relative"
      }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{display: "flex", alignItems: "center", marginTop:"10vh"}}>
            <input type="text" className="input-validate-CAS" placeholder="Número de CAS, ejemplo: SAL"/>
            <Button sx={{
              backgroundColor: "green",
              backgroundImage: `url(${iconLupa})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "50px",
              height: "50px",
              "&:hover": {
                backgroundColor: "#91BE33"
              }
            }}></Button>
          </Box>
          <Box sx={{
            width: "600px",
            height: "250px"
          }}>
            <ListComponent />
          </Box>
          <ButtonComponent title={"Validar"} color={"#20844E"}/>
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default ValidateCas;