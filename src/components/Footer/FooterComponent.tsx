import React from 'react';
import {Box, experimental_sx as sx, styled} from "@mui/material";
import logoCMPC from "../../images/Logocmpc_blanco.svg";

const Footer = styled("div")(
  sx({
    width: "100%",
    height: "100px",
    backgroundColor: "#298854",
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center"
  })
);

const FooterComponent = () => {
  return (
    <Footer>
      <Box sx={{
        backgroundImage: `url(${logoCMPC})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "130px",
        height: "80px"
      }}></Box>
    </Footer>
  );
};

export default FooterComponent;