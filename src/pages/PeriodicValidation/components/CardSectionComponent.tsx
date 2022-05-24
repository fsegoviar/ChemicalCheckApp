import React from 'react';
import {Paper, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CardSectionComponent = ({title, url}: any) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  }

  return (
    <Paper className={"config-img"} sx={{
      backgroundColor: "#1F804D",
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      margin: "20px",
      width: "100%",
      height: "40vh",
      position: "relative",
      cursor: "pointer",
      transition: "all .4s",
      "&:hover":{
        transform: "scale(1.1)",
      }
    }} onClick={handleClick}>
      <Typography variant={"h4"} sx={{
        zIndex: "1",
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
      }}>{title}</Typography>
    </Paper>
  );
};

export default CardSectionComponent;