import React, {useState} from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import {Box, FormControl, Grid, MenuItem, Select, SelectChangeEvent, TextField, Typography} from "@mui/material";
import fondoNuevoInsumo from "./images/fondo_nuevo_insumo.jpg";
import FooterComponent from "../../components/Footer/FooterComponent";
import SimpleButtonComponent from "../../components/Buttons/SimpleButtonComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const NewChemical = () => {

  const itemProduct = [
    "Producto 1",
    "Producto 2",
    "Producto 3",
    "Producto 4",
    "Producto 5",

  ];

  const itemPlanta = [
    "Planta 1",
    "Planta 2",
    "Planta 3",
    "Planta 4",
  ];

  const itemLineaProduccion = [
    "Item 1",
    "Item 2",
    "Item 3",
  ];

  const itemCentro = [
    "2003",
    "2001",
    "2002",
    "4901",
    "4902",
  ];

  const itemContactoFibra = [
    "xxxx1",
    "xxxx2",
    "xxxx3",
    "xxxx4",
    "xxxx5",
  ]

  const [product, setProduct] = useState('');
  const [planta, setPlanta] = useState('');
  const [lProduccion, setLproduccion] = useState('');
  const [centro, setcentro] = useState('');
  const [fibra, setFibra] = useState('');

  const [hiddenStep1, setHiddenStep1] = useState(true);
  const [hiddenStep2, setHiddenStep2] = useState(true);
  const [hiddenStep3, setHiddenStep3] = useState(true);
  const [hiddenStep4, setHiddenStep4] = useState(true);



  const navigate = useNavigate();
  const [translate] = useTranslation("global");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("buscar_proveedor");
  }

  const handleChangeProduct = (event: SelectChangeEvent<typeof product>) => {
    setProduct(event.target.value as string);
    setHiddenStep1(false);
  }

  const handleChangePlanta = (event: SelectChangeEvent<typeof planta>) => {
    setPlanta(event.target.value as string)
    setHiddenStep2(false);
  }

  const handleChangeProduccion = (event: SelectChangeEvent<typeof lProduccion>) => {
    setLproduccion(event.target.value as string);
      setHiddenStep3(false);
  }

  const handleChangeCentro = (event: SelectChangeEvent<typeof centro>) => {
    setcentro(event.target.value as string);
      setHiddenStep3(false);
  }

  const handleChangeFibra = (event: SelectChangeEvent<typeof fibra>) => {
    setFibra(event.target.value as string);
    setHiddenStep4(false)
  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("newChemical.header")}/>
      <Box
        className={"config-img"}
        sx={{
          backgroundImage: `url(${fondoNuevoInsumo})`,
          width: "100%",
          height: "75vh",
          position: "relative"
        }}
      >
        <form onSubmit={handleSubmit} style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Box sx={{
            width: "600px",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px"
          }}>
            <Grid container sx={{
              width: "100%",
            }}>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <FormControl sx={{m: 1, width: 300, mt: 3}}>
                  <Box>
                    <Typography variant={"h6"} style={{
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      textShadow: "3px 3px #939393"
                    }}>Producto</Typography>
                    <Select
                      value={product}
                      onChange={handleChangeProduct}
                      sx={{
                        backgroundColor: "#96BC60",
                        width: "100%"
                      }}
                    >
                      {itemProduct.map((product) => (
                        <MenuItem
                          key={product}
                          value={product}
                        >{product}</MenuItem>
                      ))}
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <FormControl sx={{m: 1, width: 300, mt: 3}}>
                  <Box hidden={hiddenStep1}>
                    <Typography variant={"h6"} style={{
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      textShadow: "3px 3px #939393"
                    }}>Planta</Typography>
                    <Select
                      value={planta}
                      onChange={handleChangePlanta}
                      sx={{
                        backgroundColor: "#96BC60",
                        width: "100%"
                      }}
                    >
                      {itemPlanta.map((planta) => (
                        <MenuItem
                          key={planta}
                          value={planta}
                        >{planta}</MenuItem>
                      ))}
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{display: "flex", justifyContent: "center"}}>
                <FormControl sx={{m: 1, width: 300, mt: 3}}>
                  <Box hidden={hiddenStep2}>
                    <Typography variant={"h6"}
                                style={{color: "#FFFFFF", fontWeight: "bold", textShadow: "3px 3px #939393"}}>Linea de
                      producción</Typography>
                    <Select
                      value={lProduccion}
                      onChange={handleChangeProduccion}
                      sx={{
                        backgroundColor: "#96BC60",
                        width: "100%"
                      }}
                    >
                      {itemLineaProduccion.map((produccion) => (
                        <MenuItem
                          key={produccion}
                          value={produccion}
                        >{produccion}</MenuItem>
                      ))}
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{display: "flex", justifyContent: "center"}}>
                <FormControl sx={{m: 1, width: 300, mt: 3}}>
                  <Box hidden={hiddenStep2}>
                    <Typography variant={"h6"} style={{
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      textShadow: "3px 3px #939393"
                    }}>Centro</Typography>
                    <Select
                      value={centro}
                      onChange={handleChangeCentro}
                      sx={{
                        backgroundColor: "#96BC60",
                        width: "100%"
                      }}
                    >
                      {itemCentro.map((centro) => (
                        <MenuItem
                          key={centro}
                          value={centro}
                        >{centro}</MenuItem>
                      ))}
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <FormControl sx={{m: 1, width: 300, mt: 3}}>
                  <Box hidden={hiddenStep3}>
                    <Typography variant={"h6"}
                                style={{color: "#FFFFFF", fontWeight: "bold", textShadow: "3px 3px #939393"}}>Contacto
                      con
                      fibra</Typography>
                    <Select
                      value={fibra}
                      onChange={handleChangeFibra}
                      sx={{
                        backgroundColor: "#96BC60",
                        width: "100%"
                      }}
                    >
                      {itemContactoFibra.map((fibra) => (
                        <MenuItem
                          key={fibra}
                          value={fibra}
                        >{fibra}</MenuItem>
                      ))}
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{padding: "20px 0", display: "flex", justifyContent: "center"}}>
                <FormControl sx={{m: 1, width: 300, mt: 3}}>
                  <Box hidden={hiddenStep4}>
                    <Typography variant={"h6"}
                                style={{color: "#FFFFFF", fontWeight: "bold", textShadow: "3px 3px #939393"}}>Contacto
                      con
                      fibra
                    </Typography>
                    <TextField id="outlined-basic" type={"number"} variant="outlined" sx={{
                      backgroundColor: "#96BC60",
                      width: "100%"
                    }}/>
                  </Box>
                </FormControl>
              </Grid>

            </Grid>
          </Box>
          <SimpleButtonComponent
            title={translate("newChemical.button1")}
            color={"#1C7638"}
            handleClick={handleSubmit}
          />
        </form>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default NewChemical;