import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../../global.css";
import ArrowBack from "../../images/flechaatras.svg";
import {useTranslation} from "react-i18next";

const NavBarComponent = ({displayArrow = "none"}) => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleClick = () => {
    navigate("/")
  }

  const handleLogout = () => {
    localStorage.removeItem("language");
    navigate("/language")
  }

  return (
      <Grid container sx={{
        position: "relative",
        width: "100%",
        height: "10vh",
        backgroundColor: "#40AA3E",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        boxSizing: "border-box",
      }}>
        <Grid item xs={3}>
          <Box className={"config-img"} sx={{
            backgroundImage: `url(${ArrowBack})`,
            width: "50px",
            height: "40px",
            display: displayArrow,
            cursor: "pointer"
          }} onClick={handleClick}></Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant={"h4"} color={"white"} style={{fontWeight: "bold", textAlign: "center"}}>Chemical
            Check</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant={"h5"} color={"white"} style={{fontWeight: "bold", cursor: "pointer", textAlign: "end"}}
                      onClick={handleLogout}>{translate("home.logout")}</Typography>
        </Grid>
      </Grid>
  );
};

export default NavBarComponent;