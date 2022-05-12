import React from 'react';
import {Paper} from "@mui/material";
import {Link} from "react-router-dom";

const CardSectionComponent = ({imgDefault, title, url}: any) => {
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
      transition: "all .4s",
      "&:hover":{
        transform: "scale(1.1)",
      }
    }}>
      <h1 style={{zIndex: "1", textAlign: "center"}}><Link to={url} style={{
        textDecoration: "none",
        color: "white"
      }}>{title}</Link></h1>
    </Paper>
  );
};

export default CardSectionComponent;