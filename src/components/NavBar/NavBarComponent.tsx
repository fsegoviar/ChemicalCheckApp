import React from 'react';
import {Box, experimental_sx as sx, styled, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import "../../global.css";
import ArrowBack from "../../images/flechaatras.svg";
import {useTranslation} from "react-i18next";


const Bar = styled("div")(
  sx({
    position:"relative",
    width: "100%",
    height: "10vh",
    backgroundColor: "#40AA3E",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    boxSizing: "border-box",
  })
);

const NavBarComponent = ({displayArrow = "none"}) => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleClick = () => {
    navigate("/")
  }

  return (
    <Bar>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${ArrowBack})`,
        width: "50px",
        height: "40px",
        display: displayArrow,
        cursor: "pointer"
      }} onClick={handleClick}></Box>
      <Typography variant={"h4"} color={"white"} style={{fontWeight:"bold"}}>Chemical Check</Typography>
      <Typography variant={"h5"} color={"white"} style={{fontWeight:"bold"}}><Link to={"language"}  className={"unstyle-link"}>{translate("home.logout")}</Link></Typography>
    </Bar>
  );
};

export default NavBarComponent;