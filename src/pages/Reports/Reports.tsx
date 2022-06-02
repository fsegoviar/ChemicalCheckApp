import React, {useState} from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_informes.jpg";
import iconLupa from "../../images/lupa.png";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup, Select, SelectChangeEvent, styled,
  Typography
} from "@mui/material";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {experimental_sx as sx} from "@mui/system";

const BackgroungHome = styled("div")(
  sx({
    backgroundImage: `url(${fondoLab})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "140vh",
    maxHeight: "1200px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflowY: "scroll",
  })
);

const Reports = () => {

  // const [display, setDisplay] = useState("none");
  const [translation] = useTranslation("global");
  const [planta, setPlanta] = useState('');
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  /*const handleClick = () => {
    setDisplay("block");
  }*/


  const [state] = React.useState({
    inform1: "Declaraciones de regulaciones (cuales están en cumplimiento) por producto final celulosa, CAS, insumo y código SAP",
    inform2: "Informe en rangos límites por sustancia e insumos según regulación",
    inform3: "Informe por producto según regulación informando concentración límite de regulación y concentración encontrada en el producto de cada sustancia",
    inform4: "Informe por planta sobre insumos utilizados que no están en contacto con la fibra",
    inform5: "Informe de insumo, dosificación del insumo y cumplimiento por regulación y por producto",
    inform6: "Informe de no cumplimiento de insumo // informe de insumos bloqueados",
  });

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

  const {
    inform1,
    inform2,
    inform3,
    inform4,
    inform5,
    inform6,
  } = state;


  const handleClick = () => {
    navigate("/resultado_reportes");
  }

  const handleChangeProduct = (event: SelectChangeEvent<typeof product>) => {
    setProduct(event.target.value as string);
  }

  const handleChangePlanta = (event: SelectChangeEvent<typeof planta>) => {
    setPlanta(event.target.value as string)
  }

  const handlePressEnter = (e: any) => {
    if(e.key === "Enter" && e.target.value !== ""){
      setHidden(false);
    }
  }

  const handleSearch = (e: any) => {
    setHidden(false);
  }

  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "130vh",
          maxHeight: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Banner title={translation("reports.header")}/>
        <Box sx={{ height: "110vh", marginTop: "10vh"}}>
          <Box>
            <FormControl sx={{m: 1, width: 300}}>
              <Box >
                <Typography variant={"h6"}
                            style={{color: "#FFFFFF", fontWeight: "bold", textShadow: "3px 3px #939393"}}>Planta
                </Typography>
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
            <FormControl sx={{m: 1, width: 300}}>
              <Box >
                <Typography variant={"h6"}
                            style={{color: "#FFFFFF", fontWeight: "bold", textShadow: "3px 3px #939393"}}>Producto
                </Typography>
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
          </Box>

          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "620px"}}>
            <input type="text" onKeyDown={handlePressEnter} className="input-validate-CAS" placeholder={translation("reports.input")}/>
            <Button sx={{
              backgroundColor: "green",
              backgroundImage: `url(${iconLupa})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "50px",
              height: "50px",
              "&:hover": {
                backgroundColor: "#91BE33"
              }
            }} onClick={handleSearch}></Button>
          </Box>
          <Box  hidden={hidden} sx={{
            width: "650px",
            height: "250px",
          }}>
            <Box sx={{
              backgroundColor: "#FFFFFF",
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              overflowY: "scroll",
              border: "2px solid #91BE33",
              boxSizing: "border-box",
              borderRadius: 2,
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <FormControl sx={{m: 3, paddingTop: "60px", width: "100%"}} component="fieldset" variant="standard">
                <RadioGroup>
                  <FormControlLabel
                    value={inform1}
                    control={
                      <Radio color="success"/>
                    }
                    label="Declaraciones de regulaciones (cuales están en cumplimiento) por producto final celulosa, CAS, insumo y código SAP"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform2}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe en rangos límites por sustancia e insumos según regulación"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform3}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe por producto según regulación informando concentración límite de regulación y concentración encontrada en el producto de cada sustancia"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform4}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe por planta sobre insumos utilizados que no están en contacto con la fibra"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform5}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe de insumo, dosificación del insumo y cumplimiento por regulación y por producto"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform6}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe de no cumplimiento de insumo // informe de insumos bloqueados"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "center"
            }}>
              <ButtonComponent title={translation("reports.button")} color={"#20844E"} handleClick={handleClick}/>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
      }}>
        <FooterComponent/>

      </Box>
    </BackgroungHome>
  );
};

export default Reports;

/*<React.Fragment>
      <NavBarComponent displayArrow={"block"} returnTo={"/"}/>
      <Banner title={translation("reports.header")}/>
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
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Grid container sx={{ justifyContent: "center"}}>
            <Grid item xs={6} sx={{display: "flex", justifyContent: "end"}}>
              <FormControl sx={{m: 1, width: 300}}>
                <Box >
                  <Typography variant={"h6"}
                              style={{color: "#FFFFFF", fontWeight: "bold", textShadow: "3px 3px #939393"}}>Planta
                  </Typography>
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
            <Grid item xs={6} sx={{display: "flex", justifyContent: "start"}}>
              <FormControl sx={{m: 1, width: 300}}>
                <Box >
                  <Typography variant={"h6"}
                              style={{color: "#FFFFFF", fontWeight: "bold", textShadow: "3px 3px #939393"}}>Producto
                  </Typography>
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
          </Grid>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "620px"}}>
            <input type="text" onKeyDown={handlePressEnter} className="input-validate-CAS" placeholder={translation("reports.input")}/>
            <Button sx={{
              backgroundColor: "green",
              backgroundImage: `url(${iconLupa})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "50px",
              height: "50px",
              "&:hover": {
                backgroundColor: "#91BE33"
              }
            }} onClick={handleSearch}></Button>
          </Box>
          <Box  hidden={hidden} sx={{
            width: "600px",
            height: "250px",
          }}>
            <Box sx={{
              backgroundColor: "#FFFFFF",
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              overflowY: "scroll",
              border: "2px solid #91BE33",
              boxSizing: "border-box",
              borderRadius: 2,
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {/!*<Typography variant={"h6"} color={"white"} style={{fontWeight: "bold"}}>{translation("reports.notFound")}</Typography>*!/}
              <FormControl sx={{m: 3, paddingTop: "60px"}} component="fieldset" variant="standard">
                <RadioGroup>
                  <FormControlLabel
                    value={inform1}
                    control={
                      <Radio color="success"/>
                    }
                    label="Declaraciones de regulaciones (cuales están en cumplimiento) por producto final celulosa, CAS, insumo y código SAP"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform2}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe en rangos límites por sustancia e insumos según regulación"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform3}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe por producto según regulación informando concentración límite de regulación y concentración encontrada en el producto de cada sustancia"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform4}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe por planta sobre insumos utilizados que no están en contacto con la fibra"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform5}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe de insumo, dosificación del insumo y cumplimiento por regulación y por producto"
                  />
                  <hr/>
                  <FormControlLabel
                    value={inform6}
                    control={
                      <Radio color="success"/>
                    }
                    label="Informe de no cumplimiento de insumo // informe de insumos bloqueados"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{
            marginTop: "150px"
          }}>
            <ButtonComponent title={translation("reports.button")} color={"#20844E"} handleClick={handleClick}/>
          </Box>
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>*/