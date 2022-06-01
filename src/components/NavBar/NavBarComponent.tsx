import React, {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "../../global.css";
import ArrowBack from "../../images/flechaatras.svg";
import imgHome from "../../images/home.svg";
import {useTranslation} from "react-i18next";

type PropsNavbar = {
  displayArrow?: string;
  displayHome?: string;
  returnTo?: string;
}

const NavBarComponent = (props: PropsNavbar) => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");
  const [displayArrow] = useState<string>(() => {
    if(props.displayArrow){
      return props.displayArrow;
    }
    return "none";
  });

  const [displayHome] = useState<string>(() => {
    if(props.displayHome){
      return props.displayHome;
    }
    return "none";
  });


  const handleClickReturn = () => {
    if(props.returnTo){
      navigate(props.returnTo);
    }
  }

  const handleClickHome = () => {
    navigate("/");
  }

  const handleLogout = () => {
    localStorage.removeItem("language");
    navigate("/language")
  }

  return (
    <Grid container sx={{
      position: "relative",
      width: "100%",
      height: "80px",
      backgroundColor: "#40AA3E",
      display: "flex",
      alignItems: "center",
      padding: "0 3rem",
      boxSizing: "border-box",
    }}>
      <Grid item xs={3} sx={{ display: "flex" }}>
        <Box className={"config-img"} sx={{
          backgroundImage: `url(${ArrowBack})`,
          backgroundSize: "contain",
          width: "50px",
          height: "40px",
          display: displayArrow,
          marginRight: "2rem",
          cursor: "pointer"
        }} onClick={handleClickReturn}></Box>
        <Box className={"config-img"} sx={{
          backgroundImage: `url(${imgHome})`,
          backgroundSize: "contain",
          width: "50px",
          height: "40px",
          display: displayHome,
          cursor: "pointer"
        }} onClick={handleClickHome}></Box>
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