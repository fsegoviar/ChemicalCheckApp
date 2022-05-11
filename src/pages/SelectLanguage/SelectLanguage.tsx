import React from 'react';
import BackgroundComponent from "./components/Background/BackgroundComponent";
import {Box, Button, Grid} from "@mui/material";
import logoCMPC from "./images/logoCMPC.svg";
import textoCH from "./images/textoCH.svg";
import "../../global.css";
import "./styles.css";
import {useNavigate} from "react-router-dom";

const SelectLanguage = () => {

  const navigation = useNavigate();

  const handleClick = (e: any) => {
    //Set Language
    localStorage.setItem("language", e)
    navigation("/");
  }

  return (
    <BackgroundComponent>
      <Grid container sx={{
        width: "100%",
        height: "100vh",
        flexDirection: "row-reverse",
      }}>
        <Grid item xs={5} sx={{
        }}>
          <Box className={"config-img"} sx={{
            backgroundImage: `url(${logoCMPC})`,
            height: "80px",
            width: "170px",
            float: "right",
            margin: "20px"
          }}></Box>
          <Box className={"config-img"} sx={{
            backgroundImage: `url(${textoCH})`,
            height: "30%",
            width: "85%",
            marginTop: "20vh",
            "@media (max-width: 1360px)": {
              height: "200px",
              width: "450px",
            }
          }}></Box>
          <Box sx={{
            width: "40%",
            margin: "0 auto",
            textAlign: "center",
            padding: "20px",
            display: "flex"
          }}>
            <Button className={"style-button"} sx={{
              backgroundColor: "#1B5E20",
              "&: hover": {
                backgroundColor: "#1B5E20"
              }
            }} onClick={() => handleClick("es")}>Español</Button>
            <Button className={"style-button"} sx={{
              backgroundColor: "#91BE33",
              "&: hover": {
                backgroundColor: "#91BE33"
              }
            }} onClick={() => handleClick("por")}>Portugués</Button>
          </Box>
        </Grid>
      </Grid>
    </BackgroundComponent>
  );
};

export default SelectLanguage;