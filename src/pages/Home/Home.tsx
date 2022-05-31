import React from "react";
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import { Box, experimental_sx as sx, Grid, styled } from "@mui/material";
import backgroundHome from "./images/backgroundHome.jpg";
import CategoryComponent from "./components/CategoryComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useTranslation } from "react-i18next";
import imgRegistrarCh from "../RegisterChemical/images/fondo_section_register.jpg";
import imgValidationPeriodic from "../PeriodicValidation/images/fondo_validacion_periodica.jpg";
import imgValidateCAS from "../ValidateCAS/images/fondo_validar_cas.jpg";
import imgListChemical from "../ListChemicalRegister/images/fondo_listar_insumo.jpg";

import {ImageComponent} from "./components/ImageComponent";

const BackgroungHome = styled("div")(
  sx({
    backgroundImage: `url(${backgroundHome})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  })
);

const Home = () => {
  const [translate] = useTranslation("global");
  return (
    <BackgroungHome>
      <NavBarComponent />

      <Box
        sx={{
          flex: "1 0 auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            boxSizing: "border-box",
            p: "20px 0",
          }}
        >
          <Box sx={{ width: "25%", height: "21vh" }}>
            <ImageComponent url={imgRegistrarCh} colorFooter={"#8fbc22"} />
          </Box>
          <Box sx={{ width: "25%", height: "21vh" }}>
            <ImageComponent
              url={imgValidationPeriodic}
              colorFooter={"#73da62ff"}
            />
          </Box>
          <Box sx={{ width: "25%", height: "21vh" }}>
            <ImageComponent url={imgValidateCAS} colorFooter={"#44a934ff"} />
          </Box>
          <Box sx={{ width: "25%", height: "21vh" }}>
            <ImageComponent url={imgListChemical} colorFooter={"#358f27ff"} />
          </Box>
          {/* <Box sx={{ width: "50%", height: "21vh" }}>
            <ImageComponent url={imgReport} colorFooter={"#8fbc22"} />
          </Box> */}
        </Box>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            width: "80%",
            margin: "0 auto",
            paddingTop: "5%",
          }}
        >
          <Grid item xs={12} md={8} lg={4}>
            <CategoryComponent
              title={translate("home.listChemicalRegister")}
              to="/listado_insumos"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <CategoryComponent
              title={translate("home.validateCAS")}
              to="/validar_cas"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <CategoryComponent
              title={translate("home.periodicValidation")}
              to="/validacion_periodica"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <CategoryComponent
              title={translate("home.reports")}
              to="/reportes"
            />
          </Grid>
          <Grid item xs={12} md={8} lg={4}>
            <CategoryComponent
              title={translate("home.registerChemical")}
              to="/registrar_insumo"
            />
          </Grid>
          {/*<Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg="https://images.unsplash.com/photo-1595500381751-d940898d13a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                title={translate("home.unlockChemical")}
                to="/desbloquear_insumo"
              />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg="https://images.unsplash.com/photo-1595500381751-d940898d13a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                title={translate("home.updateFormSupplier")}
                to="/actualizar_formulario_proveedor"
              />
            </Grid>*/}
        </Grid>
      </Box>
      <FooterComponent />
    </BackgroungHome>
  );
};

export default Home;
