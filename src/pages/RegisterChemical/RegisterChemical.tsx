import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_section_register.jpg";
import {Box, styled} from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {experimental_sx as sx} from "@mui/system";

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

const RegisterChemical = () => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleClickNewRegister = () =>{
    navigate("nuevo_registro");
  }

  const handleClickReviewTicket = () =>{
    navigate("revisar_solicitud");
  }

  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
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
        <Banner title={translate("registerChemical.header")}/>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10vh"
          }}
        >
          <ButtonComponent
            title={translate("registerChemical.button1")}
            handleClick={handleClickNewRegister}
            color={"#92D050"}
          />
          <ButtonComponent
            title={translate("registerChemical.button2")}
            handleClick={handleClickReviewTicket}
            color={"#1C7638"}
          />
        </Box>
      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default RegisterChemical;
/*<React.Fragment>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
      <Banner title={translate("registerChemical.header")}/>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "75vh",
        position: "relative"
      }}>
        <Box sx={{
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          position: "absolute",
          top:0,
          left: 0,
          opacity: "0.2"

        }}></Box>
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
          <ButtonComponent
            title={translate("registerChemical.button1")}
            handleClick={handleClickNewRegister}
            color={"#92D050"}
          />
          <ButtonComponent
            title={translate("registerChemical.button2")}
            handleClick={handleClickReviewTicket}
            color={"#1C7638"}
          />
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>*/
