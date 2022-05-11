import React from 'react';
import {Box, Paper} from "@mui/material";
import {Link} from "react-router-dom";

const CardSectionComponent = ({imgDefault, title, url}: any) => {
  return (
    <Paper className={"config-img"} sx={{
      backgroundImage: `url(${imgDefault})`,
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      width: "100%",
      height: "40vh",
      position: "relative",
      transition: "all .4s",
      "&:hover":{
        transform: "scale(1.1)",
      }
    }}>
      <Box sx={{
        opacity: "0.8",
        backgroundColor: "green",
        width: "100%",
        height: "100%",
        position: "absolute",
        top:0,
        left:0
      }}>
      </Box>
      <h1 style={{zIndex: "1", textAlign: "center"}}><Link to={url} style={{
        textDecoration: "none",
        color: "white"
      }}>{title}</Link></h1>
    </Paper>
  );
};

export default CardSectionComponent;