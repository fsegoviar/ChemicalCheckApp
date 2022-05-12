import React, {useState} from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_informes.jpg";
import iconLupa from "../../images/lupa.png";
import {Box, Button} from "@mui/material";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import {useTranslation} from "react-i18next";
import ListComponent from "../../components/List/ListComponent";

const Reports = () => {

  const [display, setDisplay] = useState("none");
  const [translation] = useTranslation("global")

  const handleClick = () => {
    setDisplay("block");
  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translation("reports.header")}/>
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
            justifyContent: "center"
          }}
        >
          <Box sx={{display: "flex", alignItems: "center"}}>
            <input type="text" className="input-validate-CAS" placeholder={translation("reports.input")}/>
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
            height: "250px",
            display: display
          }}>
            <ListComponent />
          </Box>
          <ButtonComponent title={translation("reports.button")} color={"#20844E"} handleClick={handleClick}/>
        </Box>
      </Box>
      <FooterComponent />
    </React.Fragment>
  );
};

export default Reports;