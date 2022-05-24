import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import Banner from "../../components/Banner/Banner";
import FooterComponent from "../../components/Footer/FooterComponent";
import fondoLab from "./images/fondo_informes.jpg";
import iconLupa from "../../images/lupa.png";
import {Box, Button, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
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


  const [state] = React.useState({
    inform1: "Declaraciones de regulaciones (cuales están en cumplimiento) por producto final celulosa, CAS, insumo y código SAP",
    inform2: "Informe en rangos límites por sustancia e insumos según regulación",
    inform3: "Informe por producto según regulación informando concentración límite de regulación y concentración encontrada en el producto de cada sustancia",
    inform4: "Informe por planta sobre insumos utilizados que no están en contacto con la fibra",
    inform5: "Informe de insumo, dosificación del insumo y cumplimiento por regulación y por producto",
    inform6: "Informe de no cumplimiento de insumo // informe de insumos bloqueados",
  });

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
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "620px"}}>
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
              backgroundColor: "#FFFFFF",
              width: "100%",
              height: "auto",
              maxHeight: "400px",
              overflowY: "scroll",
              border: "2px solid #91BE33",
              boxSizing: "border-box",
              borderRadius: 5,
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {/*<Typography variant={"h6"} color={"white"} style={{fontWeight: "bold"}}>{translation("reports.notFound")}</Typography>*/}
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
    </React.Fragment>
  );
};

export default Reports;