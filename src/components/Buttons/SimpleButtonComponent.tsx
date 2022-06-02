import React from 'react';
import {Button} from "@mui/material";

interface PropsButton{
  title: string;
  color: string;
  handleClick?: any;
}

const SimpleButtonComponent = (props: PropsButton) => {
  return (
    <Button
      sx={{
        fontSize: "1.3rem",
        fontWeight: "bold",
        backgroundColor: props.color,
        borderRadius: "50PX",
        boxSizing: "border-box",
        padding: "10px 30px",
        margin: "20px",
        color: "white",
        "&:hover": {
          backgroundColor: props.color
        }
      }}
      onClick={props.handleClick}
    >
      {props.title}
    </Button>
  );
};

export default SimpleButtonComponent;