import React from 'react';
import {Button} from "@mui/material";

const ButtonComponent = ({title, handleClick, color}: any) => {
  return (
    <Button onClick={handleClick} sx={{
      fontSize: "1.6rem",
      fontWeight: "bold",
      backgroundColor: color,
      borderRadius: 50,
      border: "3px solid white",
      padding: "5px 30px",
      margin: "20px",
      color: "white",
      "&:hover":{
        backgroundColor: color
      }
    }}>
      {title}
    </Button>
  );
};

export default ButtonComponent;