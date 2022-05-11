import React from 'react';
import {Box, experimental_sx as sx, styled, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import "../../global.css";
import ArrowBack from "../../images/flechaatras.svg";


const Bar = styled("div")(
  sx({
    width: "100vw",
    height: "80px",
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
      <Typography variant={"h5"} color={"white"} style={{fontWeight:"bold"}}><Link to={"language"}  className={"unstyle-link"}>Cerrar Sesión</Link></Typography>
    </Bar>
  );
};

export default NavBarComponent;