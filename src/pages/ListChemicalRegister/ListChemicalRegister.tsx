import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import {Box, IconButton, Tooltip} from "@mui/material";
import Banner from "../../components/Banner/Banner";
import fondoLab from "./images/fondo_listar_insumo.jpg";
import SimpleButtonComponent from "../../components/Buttons/SimpleButtonComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";


const ListChemicalRegister = () => {

  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleClick = () => {
    navigate("registrado")
  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
      <Banner title={translate("listChemicalRegister.header")}/>
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "75vh",
        position: "relative"
      }}>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "30vw",
            }}
          >
            <Box sx={{ display: "flex"}}>
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
        </Box>

      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default ListChemicalRegister;