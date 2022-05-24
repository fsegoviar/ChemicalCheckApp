import React from 'react';
import imgAprobado from "../../images/aprobado.png";
import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ModalCompleteActions = ({title}: any) => {

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/")
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%"
    }}>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${imgAprobado})`,
        backgroundSize: "contain",
        width: "50%",
        height: "50%"
      }}></Box>
      <Typography variant={"h3"} sx={{
        color: "#6F6E72",
        fontWeight: "bold"
      }}>{title}</Typography>
      <Box sx={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
      }}>
        <Button sx={{
          maxWidth: "500px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          backgroundColor: "#90BC1F",
          borderRadius: 50,
          border: "3px solid white",
          padding: "5px 30px",
          margin: "20px",
          color: "white",
          "&:hover": {
            backgroundColor: "#90BC1F"
          }
        }}>Enviar al correo</Button>
        <Button sx={{
          maxWidth: "500px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          backgroundColor: "#90BC1F",
          borderRadius: 50,
          border: "3px solid white",
          padding: "5px 30px",
          margin: "20px",
          color: "white",
          "&:hover": {
            backgroundColor: "#90BC1F"
          }
        }}>Descargar</Button>
        <Button sx={{
          maxWidth: "500px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          backgroundColor: "#90BC1F",
          borderRadius: 50,
          border: "3px solid white",
          padding: "5px 30px",
          margin: "20px",
          color: "white",
          "&:hover": {
            backgroundColor: "#90BC1F"
          }
        }}>Imprimir</Button>
      </Box>
      <Box sx={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
      }}>
        <Button sx={{
          maxWidth: "500px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          backgroundColor: "#25814B",
          borderRadius: 50,
          border: "3px solid white",
          padding: "5px 30px",
          margin: "20px",
          color: "white",
          "&:hover": {
            backgroundColor: "#25814B"
          }
        }} onClick={handleReturn}>Volver al inicio</Button>
      </Box>
    </Box>
  );
};

export default ModalCompleteActions;