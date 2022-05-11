import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {Box} from "@mui/material";
import Banner from "../../components/Banner/Banner";
import fondoLab from "./images/fondo_listar_insumo.jpg";
import SimpleButtonComponent from "../../components/Buttons/SimpleButtonComponent";

const ListChemicalRegister = () => {
  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={"Listado insumos registrados"}/>
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "30vw",
            }}
          >
            <input type="text" className="input-style" placeholder="#CAS" />
            <input
              type="text"
              className="input-style"
              placeholder="Nombre Comercial"
            />
            <input type="text" className="input-style" placeholder="Cod. SAP" />
            <SimpleButtonComponent title={"Buscar"} color={"#91BE33"}/>
          </Box>
        </Box>

      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default ListChemicalRegister;