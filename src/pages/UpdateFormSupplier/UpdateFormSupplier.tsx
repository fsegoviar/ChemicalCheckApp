import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "../../images/fondo_lab.svg";
import {Box, Container, Grid} from "@mui/material";
import ComponentSectionSupplier from "./components/ComponentSectionSupplier";
import {useTranslation} from "react-i18next";
import imgDefault from "../../images/default.jpg";

const UpdateFormSupplier = () => {

  const [translate] = useTranslation("global");

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("updateFormSupplier.header")}/>
      <Box sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "70vh",
      }}>
        <Container maxWidth={"xl"} sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%"
        }}>
          <Grid container sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
          }}>
            <Grid item xs={12} md={8} lg={6}>
              <ComponentSectionSupplier
                urlImg={imgDefault}
                title={translate("updateFormSupplier.title1")}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <ComponentSectionSupplier
                urlImg={imgDefault}
                title={translate("updateFormSupplier.title2")}
              />
            </Grid>
          </Grid>

        </Container>
      </Box>
      <FooterComponent />
    </React.Fragment>
  );
};

export default UpdateFormSupplier;