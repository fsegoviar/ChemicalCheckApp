import React from 'react';
import {Box, experimental_sx as sx, styled} from "@mui/material";
import logoCMPC from "../../images/Logocmpc_blanco.svg";

const Footer = styled("div")(
  sx({
    width: "100%",
    height: "12vh",
    backgroundColor: "#298854",
    position:"relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box"
  })
);

const FooterComponent = () => {
  return (
    <Footer>
      <Box sx={{
        backgroundImage: `url(${logoCMPC})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100px",
        height: "100%",
      }}></Box>
    </Footer>
  );
};

export default FooterComponent;