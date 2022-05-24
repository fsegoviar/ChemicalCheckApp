import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_informes.jpg";
import iconLupa from "../../images/lupa.png";
import {Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup} from "@mui/material";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const Reports = () => {

  // const [display, setDisplay] = useState("none");
  const [translation] = useTranslation("global")
  const navigate = useNavigate();
  /*const handleClick = () => {
    setDisplay("block");
  }*/


  const [state, setState] = React.useState({
    inform1: false,
    inform2: false,
    inform3: false,
    inform4: false,
    inform5: false,
    inform6: false,
    inform7: false,
  });

  const {
    inform1,
    inform2,
    inform3,
    inform4,
    inform5,
    inform6,
    inform7,
  } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClick = () => {
    navigate("/resultado_reportes");
  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
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
          <Box sx={{display: "flex", alignItems: "center"}}>
            <input type="text" className="input-validate-CAS" placeholder={translation("reports.input")}/>
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
            }}></Button>
          </Box>
          <Box sx={{
            width: "600px",
            height: "250px",
          }}>
            <Box sx={{
              backgroundColor: "#91BE33",
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              overflowY: "scroll",
              border: "2px solid white",
              boxSizing: "border-box",
              borderRadius: 5,
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {/*<Typography variant={"h6"} color={"white"} style={{fontWeight: "bold"}}>{translation("reports.notFound")}</Typography>*/}
              <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={inform1} color="primary" onChange={handleChange} name="inform1"/>
                    }
                    label="Declaraciones de regulaciones (cuales están en cumplimiento) por producto final celulosa, CAS, insumo y código SAP"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={inform2} color="primary" onChange={handleChange} name="inform2"/>
                    }
                    label="Informe en rangos límites por sustancia e insumos según regulación"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={inform3} color="primary" onChange={handleChange} name="inform3"/>
                    }
                    label="Informe por producto según regulación informando"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={inform4} color="primary" onChange={handleChange} name="inform4"/>
                    }
                    label="Concentración límite de regulación y concentración encontrada en el producto de cada sustancia"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={inform5} color="primary" onChange={handleChange} name="inform5"/>
                    }
                    label="Informe por planta sobre insumos utilizados que no están en contacto con la fibra"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={inform6} color="primary" onChange={handleChange} name="inform6"/>
                    }
                    label="Informe de insumo, dosificación del insumo y cumplimiento por regulación y por producto"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={inform7} color="primary" onChange={handleChange} name="inform7"/>
                    }
                    label="Informe de no cumplimiento de insumo // informe de insumos bloqueados"
                  />
                </FormGroup>
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
    </React.Fragment>
  );
};

export default Reports;