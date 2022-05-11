import React from 'react';
import {Box, Typography} from "@mui/material";

const ListComponent = () => {
  return (
    <Box sx={{
      backgroundColor:"#91BE33",
      width: "100%",
      height: "100%",
      border: "2px solid white",
      borderRadius: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Typography variant={"h6"} color={"white"} style={{fontWeight: "bold"}}>No se han encontrado registros</Typography>
    </Box>
  );
};

export default ListComponent;