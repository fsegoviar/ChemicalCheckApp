import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import {Box, Grid} from "@mui/material";
import fondoNuevoInsumo from "./images/fondo_nuevo_insumo.jpg";
import FooterComponent from "../../components/Footer/FooterComponent";
import SimpleButtonComponent from "../../components/Buttons/SimpleButtonComponent";
import {useTranslation} from "react-i18next";
import InputCustom from "./components/InputCustom";
import {useNavigate} from "react-router-dom";

const NewChemical = () => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("buscar_proveedor");
  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("newChemical.header")}/>
      <Box
        className={"config-img"}
        sx={{
          backgroundImage: `url(${fondoNuevoInsumo})`,
          width: "100%",
          height: "75vh",
          position: "relative"
        }}
      >
        <Box sx={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: "0.2"

        }}></Box>
        <form onSubmit={handleSubmit} style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Box sx={{
            width: "600px",
            backgroundColor: "#92D050",
            display: "flex",
            justifyContent: "center",
            border: "2px solid #1C7638",
            borderRadius: "20px"
          }}>
            <Grid container sx={{
              width: "100%",
            }}>
              <Grid item xs={6}  sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <InputCustom label={"Contacto con fibra"} name={"cFibra"}/>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <InputCustom label={"Dosificación"} name={"dosificacion"}/>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <InputCustom label={"Producto CMPC"} name={"producto"}/>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <InputCustom label={"Centro"} name={"centro"}/>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <InputCustom label={"Planta"} name={"planta"}/>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <InputCustom label={"Línea de producción"} name={"produccion"}/>
              </Grid>
            </Grid>
          </Box>
          <SimpleButtonComponent
            title={translate("newChemical.button1")}
            color={"#1C7638"}
            handleClick={handleSubmit}
          />
        </form>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default NewChemical;