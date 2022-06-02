import React from 'react';
import fondoLab from "../../../images/fondo_lab.svg";
import NavBarComponent from "../../../components/NavBar/NavBarComponent";
import {Box, styled, Typography} from "@mui/material";
import FooterComponent from "../../../components/Footer/FooterComponent";
import ButtonComponent from "../../RegisterChemical/components/ButtonComponent";
import {useNavigate} from "react-router-dom";
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

const PreviewEmailChemical = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/listado_insumos/correo_enviado");
  }

  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/listado_insumos"} displayHome={"block"}/>
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
        <Box sx={{
          width: "40vw",
          maxWidth: "600px",
          height: "auto",
          border: "2px solid #90BC1F",
          borderRadius: "10px",
          boxSizing: "border-box",
          padding: "1rem",
        }}>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Insumo: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Proveedor: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Fecha creación / Registro: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>16/03/2021</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Estado: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>Aprobado</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Contacto directo con fibra: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>No</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Plantas que utilizan: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Producto que utilizan: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Línea de producción: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
          </Typography>
          <Typography variant={"h6"} style={{
            color: "#90BC1F",
            fontWeight: "bold"
          }}>Fecha última Revisión: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>01/12/2021</p>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
          <ButtonComponent title={"Enviar por correo electrónico"} handleClick={handleClick} color={"#90BC1F"}/>
        </Box>
      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default PreviewEmailChemical;

/*<Box className={"config-img"} sx={{
      backgroundImage: `url(${fondoLab})`,
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box"
    }}>
      <NavBarComponent displayArrow={"block"} returnTo={"/listado_insumos"} displayHome={"block"}/>
      <Grid container justifyContent={"center"} sx={{ flex: "1 0 auto"}}>
        <Grid item xs={12} sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto"
        }}>
          <Box sx={{
            width: "40vw",
            maxWidth: "600px",
            height: "auto",
            border: "2px solid #90BC1F",
            borderRadius: "10px",
            boxSizing: "border-box",
            padding: "1rem",
          }}>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Insumo: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Proveedor: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Fecha creación / Registro: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>16/03/2021</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Estado: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>Aprobado</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Contacto directo con fibra: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>No</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Plantas que utilizan: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Producto que utilizan: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Línea de producción: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>xxxx</p>
            </Typography>
            <Typography variant={"h6"} style={{
              color: "#90BC1F",
              fontWeight: "bold"
            }}>Fecha última Revisión: <p style={{ display: "inline", color: "black", fontWeight: "normal"}}>01/12/2021</p>
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
    </Box>*/