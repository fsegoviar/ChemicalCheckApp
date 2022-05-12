import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import {Box} from "@mui/material";
import fondoLab from "./images/fondo_section_register.jpg";
import FooterComponent from "../../components/Footer/FooterComponent";
import SimpleButtonComponent from "../../components/Buttons/SimpleButtonComponent";
import {useTranslation} from "react-i18next";

const ReviewTicket = () => {

  const [translate] = useTranslation("global");

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("reviewTicker.header")}/>
      <Box
        className={"config-img"}
        sx={{
          backgroundImage: `url(${fondoLab})`,
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
          <input type="text" className="input-style" placeholder={translate("reviewTicker.input")} />
          <SimpleButtonComponent
            title={translate("reviewTicker.button")}
            color={"#1C7638"}
          />
        </Box>
      </Box>
      <FooterComponent />
    </React.Fragment>
  );
};

export default ReviewTicket;