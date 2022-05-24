import React from 'react';
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box, Button, Grid, Typography} from "@mui/material";
import fondoLab from "../images/fondo_validacion_periodica.jpg";
import FooterComponent from "../../../components/Footer/FooterComponent";
import {useNavigate} from "react-router-dom";
import Banner from "../../../components/Banner/Banner";
import {useTranslation} from "react-i18next";

const InfoLoadMasive = () => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleClick = () => {
    navigate("/resultado_carga_masiva");
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
      <Banner title={translate("loadMasive.header")}/>
      <Grid container justifyContent={"center"} sx={{ flex: "1 0 auto"}}>
        <Grid item xs={12} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <Box sx={{
            width: "50%",
            height: "350px",
            backgroundColor: "#8FCD51",
            border: "2px solid #FFFFFF",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}>
            <Typography variant={"h3"} sx={{
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "30px"

            }}>LA CARGA DE DATOS SE HA REALIZADO CON ÉXITO.</Typography>

            <Button onClick={handleClick} sx={{
              maxWidth: "500px",
              fontSize: "1.3rem",
              fontWeight: "bold",
              backgroundColor: "#20844E",
              borderRadius: 50,
              border: "3px solid white",
              padding: "5px 30px",
              margin: "20px",
              color: "white",
              "&:hover":{
                backgroundColor: "#20844E"
              }
            }}>
              <a href="data:application/vnd.ms-excel,test" style={{
                outline: "none",
                textDecoration: "none",
                color: "#FFFFFF"
              }}>DESCARGUE EL INFORME DE CARGA MASIVA AQUI</a>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <FooterComponent/>
    </Box>
  );
};

export default InfoLoadMasive;