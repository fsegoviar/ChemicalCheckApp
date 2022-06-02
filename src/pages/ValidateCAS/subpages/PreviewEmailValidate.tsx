import React from 'react';
import fondoLab from "../../../images/fondo_lab.svg";
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box, Grid, Typography} from "@mui/material";
import ButtonComponent from "../../RegisterChemical/components/ButtonComponent";
import FooterComponent from "../../../components/Footer/FooterComponent";
import {useNavigate} from "react-router-dom";

const PreviewEmailValidate = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/validar_cas/correo_enviado");
  }

  return (
    <Box className={"config-img"} sx={{
      backgroundImage: `url(${fondoLab})`,
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box"
    }}>
      <NavBarComponent displayArrow={"block"} returnTo={"/validar_cas"} displayHome={"block"}/>
      <Grid container justifyContent={"center"} sx={{ flex: "1 0 auto"}}>
        <Grid item xs={6} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <Box sx={{
            width: "90%",
            height: "auto",
            border: "2px solid #90BC1F",
            borderRadius: "10px",
            boxSizing: "border-box",
            padding: "20px",
          }}>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Planta: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>Laja</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Productos que utilizan #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Insumos asociados al #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Regulaciones asociadas #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={6} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <Box sx={{
            width: "90%",
            height: "auto",
            border: "2px solid #90BC1F",
            borderRadius: "10px",
            boxSizing: "border-box",
            padding: "20px",
          }}>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Planta: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>Pacifico</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Productos que utilizan #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Insumos asociados al #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Regulaciones asociadas #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={6} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <Box sx={{
            width: "90%",
            height: "auto",
            border: "2px solid #90BC1F",
            borderRadius: "10px",
            boxSizing: "border-box",
            padding: "20px",
          }}>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Planta: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>Santa Fe</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Productos que utilizan #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Insumos asociados al #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Regulaciones asociadas #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <Box sx={{
            width: "90%",
            height: "auto",
            border: "2px solid #90BC1F",
            borderRadius: "10px",
            boxSizing: "border-box",
            padding: "20px",
          }}>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Planta: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>Guaiba</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Productos que utilizan #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Insumos asociados al #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Regulaciones asociadas #CAS: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxxx</p>
            </Typography>
          </Box>

        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <ButtonComponent title={"Enviar por correo electrónico"} handleClick={handleClick} color={"#90BC1F"}/>
          </Box>
        </Grid>
      </Grid>
      <FooterComponent/>
    </Box>
  );
};

export default PreviewEmailValidate;