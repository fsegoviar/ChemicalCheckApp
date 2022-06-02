import React from 'react';
import {Box, Typography} from "@mui/material";
import SimpleButtonComponent from "../Buttons/SimpleButtonComponent";

interface PropsModal {
  title: string;
  subtitle?: string;
  img: string;
  handleClick: any
}

const ModalOneActionComponent = (props: PropsModal) => {

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }}>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${props.img})`,
        backgroundSize: "contain",
        width: "200px",
        height: "200px"
      }}></Box>
      <Typography variant={"h4"} style={{fontWeight: "bold", color: "#878689"}}>{props.title}</Typography>
      <Typography variant={"h5"}>{props.subtitle}</Typography>
      <Box>
        <SimpleButtonComponent title={"Siguiente"} color={"#91BE33"} handleClick={props.handleClick}/>
      </Box>
    </Box>
  );
};

export default ModalOneActionComponent;