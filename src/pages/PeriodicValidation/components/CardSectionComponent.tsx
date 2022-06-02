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
      background:
        "linear-gradient(0deg, rgba(32, 62, 19, 1) 0%, rgba(37, 131, 75, 1) 100%)",
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: "center",
      margin: "20px",
      width: "100%",
      height: "30vh",
      maxHeight: "200px",
      position: "relative",
      cursor: "pointer",
      transition: "all .4s",
      "&:hover":{
        transform: "scale(1.1)",
      }
    }} onClick={handleClick}>
      <Typography variant={"h4"} sx={{
        zIndex: "1",
        width: "80%",
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
      }}>{title}</Typography>
    </Paper>
  );
};

export default CardSectionComponent;