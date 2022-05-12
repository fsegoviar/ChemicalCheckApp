import React from 'react';
import {Box, Paper} from "@mui/material";
import styled from "@emotion/styled";
import SimpleButtonComponent from "../../../components/Buttons/SimpleButtonComponent";

const BackgroundOpacity = styled.div`
  background-color: green;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ComponentSectionSupplier = ({ urlImg, title, handleClick }: any) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: "center",
        height: 400,
        backgroundImage: `url(${urlImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        margin:"20px",
        transition: "all .4s",
        '&:hover': {
          boxShadow: "1px 1px 24px grey",
          transform: "scale(1.05)"
        }
      }}
    >
      <BackgroundOpacity />
      <h1 style={{zIndex: "1", textAlign: "center", color: "white"}} >{title}</h1>
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <SimpleButtonComponent title={"Iniciar"} color={"#91BE33"} handleClick={handleClick} />
      </Box>
    </Paper>
  );
};

export default ComponentSectionSupplier;