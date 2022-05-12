import React from 'react';
import {Box, Typography} from "@mui/material";
import SimpleButtonComponent from "../Buttons/SimpleButtonComponent";

interface PropsModal {
  title?: string;
  subtitle?: string;
  img: string;
  titleBtn1: string;
  color1: string;
  handleClick1: any;
  titleBtn2: string;
  color2: string;
  handleClick2: any;
}

const ModalTwoActionComponent = (props: PropsModal) => {
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
        width: "50%",
        height: "50%"
      }}></Box>
      <Typography variant={"h4"} style={{fontWeight: "bold", color: "#878689"}}>{props.title}</Typography>
      <Typography variant={"h5"}>{props.subtitle}</Typography>
      <Box>
        <SimpleButtonComponent title={props.titleBtn1} color={props.color1} handleClick={props.handleClick1}/>
      </Box>
      <Box>
        <SimpleButtonComponent title={props.titleBtn2} color={props.color2} handleClick={props.handleClick2}/>
      </Box>
    </Box>
  );
};

export default ModalTwoActionComponent;