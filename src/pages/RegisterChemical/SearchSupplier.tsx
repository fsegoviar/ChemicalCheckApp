import React from 'react';
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import {Box, Button, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import fondoLab from "../../images/fondo_lab.svg";
import FooterComponent from "../../components/Footer/FooterComponent";
import Banner from "../../components/Banner/Banner";
import iconLupa from "../../images/lupa.png";
import ButtonComponent from "./components/ButtonComponent";

const SearchSupplier = () => {

  const handleClick = () => {

  }

  return (
    <React.Fragment>
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={"Seleccionar Proveedor"} />
      <Box className={"config-img"} sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "80vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
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
          <Box sx={{display: "flex", alignItems: "center"}}>
            <input type="text" className="input-validate-CAS" placeholder="Email del proveedor"/>
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
            width: "350px",
            height: "250px",
            marginTop: "10px",
          }}>
            <Box sx={{
              width: "100%",
              height: "90%",
              border: "2px solid #91BE33",
              borderRadius: 5,
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              overflowY: "scroll",
              boxSizing: "borderBox",
            }}>
              <FormControl style={{
                padding:"20px"
              }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="proveedor1"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="proveedor1" control={<Radio />} label="proveedor1@gmail.com" />
                  <FormControlLabel value="proveedor2" control={<Radio />} label="proveedor2@gmail.com" />
                  <FormControlLabel value="proveedor3" control={<Radio />} label="proveedor3@gmail.com" />
                  <FormControlLabel value="proveedor4" control={<Radio />} label="proveedor4@gmail.com" />
                  <FormControlLabel value="proveedor5" control={<Radio />} label="proveedor5@gmail.com" />
                  <FormControlLabel value="proveedor6" control={<Radio />} label="proveedor6@gmail.com" />
                  <FormControlLabel value="proveedor7" control={<Radio />} label="proveedor7@gmail.com" />
                  <FormControlLabel value="proveedor8" control={<Radio />} label="proveedor8@gmail.com" />
                  <FormControlLabel value="proveedor9" control={<Radio />} label="proveedor9@gmail.com" />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <ButtonComponent title="validar" color={"#20844E"} handleClick={handleClick}/>
        </Box>
      </Box>
      <FooterComponent/>
    </React.Fragment>
  );
};

export default SearchSupplier;