import React from 'react';
import {Button} from "@mui/material";

const SimpleButtonComponent = ({title, color, handleClick}: any) => {
  return (
    <Button
      sx={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        backgroundColor: color,
        borderRadius: 50,
        boxSizing: "border-box",
        padding: "10px 20px",
        margin: "20px",
        color: "white",
        "&:hover": {
          backgroundColor: color
        }
      }}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default SimpleButtonComponent;