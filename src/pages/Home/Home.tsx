import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import {Container, experimental_sx as sx, Grid, styled} from "@mui/material";
import backgroundHome from "./images/backgroundHome.jpg";
import CategoryComponent from "./components/CategoryComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

const BackgroungHome = styled("div")(
  sx({
    backgroundImage: `url(${backgroundHome})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  })
);

const Home = () => {
  return (
    <React.Fragment>
      <NavBarComponent/>
      <BackgroungHome>
        <Container sx={{ marginTop: "110px"}}>
          <Grid container spacing={3} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg='https://images.unsplash.com/photo-1583912267550-d974311a9a6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                title="Listado de insumos registrados"
                to="/listado_insumos"
              />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg='https://images.unsplash.com/photo-1582719471327-5bd41fcf7f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80'
                title="Validar CAS"
                to="/validar_cas"
              />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg='https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                title="Validación Periódica"
                to="/validacion_periodica"
              />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg="https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                title="Informes"
                to="/reportes"
              />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg="https://images.unsplash.com/photo-1595500381751-d940898d13a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                title="Registrar nuevo Insumo"
                to="/registrar_insumo"
              />
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
              <CategoryComponent
                urlImg="https://images.unsplash.com/photo-1595500381751-d940898d13a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                title="Desbloquear insumos para compra"
                to="/desbloquear_insumo"
              />
            </Grid>
          </Grid>
        </Container>
      </BackgroungHome>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default Home;