import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {Box, IconButton, styled, Tooltip} from "@mui/material";
import Banner from "../../components/Banner/Banner";
import fondoLab from "./images/fondo_listar_insumo.jpg";
import SimpleButtonComponent from "../../components/Buttons/SimpleButtonComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import {experimental_sx as sx} from "@mui/system";

const BackgroungHome = styled("div")(
  sx({
    backgroundImage: `url(${fondoLab})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  })
);

const ListChemicalRegister = () => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleClick = () => {
    navigate("registrado")
  }

  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "86vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Banner title={translate("listChemicalRegister.header")}/>
        <Box sx={{ display: "flex", marginTop: "10vh"}}>
          <input type="text" className="input-style" placeholder={translate("listChemicalRegister.inputCAS")} />
          <Tooltip title="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
            <IconButton>
              <HelpIcon sx={{ backgroundColor: "#FFFFFF", borderRadius: 50, height: "50px", width: "50px"}} color="success" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ display: "flex"}}>
          <input
            type="text"
            className="input-style"
            placeholder={translate("listChemicalRegister.inputName")}
          />
          <Tooltip title="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
            <IconButton>
              <HelpIcon sx={{ backgroundColor: "#FFFFFF", borderRadius: 50, height: "50px", width: "50px"}} color="success" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ display: "flex"}}>
          <input type="text" className="input-style" placeholder={translate("listChemicalRegister.inputSAP")} />
          <Tooltip title="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
            <IconButton>
              <HelpIcon sx={{ backgroundColor: "#FFFFFF", borderRadius: 50, height: "50px", width: "50px"}} color="success" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ marginRight: "40px"}}>
          <SimpleButtonComponent title={translate("listChemicalRegister.btnSearch")} color={"#91BE33"} handleClick={handleClick}/>
        </Box>
      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default ListChemicalRegister;