import React from 'react';
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box,styled, Typography} from "@mui/material";
import fondoLab from "../../../images/fondo_lab.svg";
import aprobado from "../../../images/aprobado.png";
import FooterComponent from "../../../components/Footer/FooterComponent";
import {useNavigate} from "react-router-dom";
import Banner from "../../../components/Banner/Banner";
import {useTranslation} from "react-i18next";
import {experimental_sx as sx} from "@mui/system";
import SimpleButtonComponent from "../../../components/Buttons/SimpleButtonComponent";

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

const InfoLoadMasive = () => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleClick = () => {
    navigate("/resultado_carga_masiva");
  }

  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/carga_masiva"} displayHome={"block"}/>
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
        <Banner title={translate("loadMasive.header")}/>
        <Box className={"config-img"} sx={{
          backgroundImage: `url(${aprobado})`,
          backgroundSize: "contain",
          width: "200px",
          height: "200px",
          marginTop: "10vh"
        }}></Box>
        <Typography variant={"h3"} sx={{
          color: "#6F6E72",
          fontWeight: "bold",
          width: "50%",
          textAlign: "center",
        }}>La carga de datos se ha realizado con éxito.</Typography>
        <Box>
          <SimpleButtonComponent title={"Descargue el informe de carga masiva aquí"} color={"#25834B"} handleClick={handleClick}/>
        </Box>
      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default InfoLoadMasive;

/*<Box className={"config-img"} sx={{
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
              marginBottom: "30px",
              width: "80%"

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
    </Box>*/