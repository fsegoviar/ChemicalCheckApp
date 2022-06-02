import React, {useState} from "react";
import fondoLab from "./images/fondo_validacion_periodica.jpg";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Grid, styled,
} from "@mui/material";
import Banner from "../../components/Banner/Banner";
import {useTranslation} from "react-i18next";
import NavBarComponent from "../../components/NavBar/NavBarComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import ListFilesComponent from "./components/ListFilesComponent";
import ButtonComponent from "../RegisterChemical/components/ButtonComponent";
import {useNavigate} from "react-router-dom";
import {experimental_sx as sx} from "@mui/system";

const filesLoad = [
  "Tabla base",
  "Tabla base sustancia",
  "Tabla insumos - sustancias",
  "Sustancia en insumo",
  "Sustancia en producto",
  "Relación insumo sustituto",
  "Relación producto - planta",
  "Relación regulación tipo de producto",
  "Relación tipo de producto linea de producción",
  "Relación mercado - país",
  "Relación regulación - sustancia",
  "Relación insumo - certificación",
  "Relación insumo - manufacturador - ficha de seguridad",
  "Tabla mantenedora SAP",
  "Sustancias críticos",
  "Laboratorio - Análisis",
  "Tabla análisis de laboratorios",
  "Tabla concentraciones de producto",
];

const dataTable = [
  {
    name: "Tabla base",
    url: "https://docs.google.com/spreadsheets/d/1TVTv7cjeK7LbotVc-Avk5cyUEZSLXT9h/edit#gid=934705192",
  },
  {
    name: "Tabla base sustancia",
    url: "https://docs.google.com/spreadsheets/d/1v6X0eS3xW0xT6LEz0izMy57tlEpopuze/edit?rtpof=true#gid=161013748",
  },
  {
    name: "Tabla insumos - sustancias",
    url: "https://docs.google.com/spreadsheets/d/1CmwAvs6egwtd8SNvB9lo49W94qWRe29g/edit?rtpof=true#gid=1016929002",
  },
  {
    name: "Sustancia en insumo",
    url: "https://docs.google.com/spreadsheets/d/1DudLs90Qfp0PRMZ-mUulm3JPrwgiMdze/edit#gid=924945074",
  },
  {
    name: "Sustancia en producto",
    url: "https://docs.google.com/spreadsheets/d/1K1RB6kgr7NTYxzniWdKXlp_n9vxk76aW/edit#gid=1850246025",
  },
  {
    name: "Relación insumo sustituto",
    url: "https://docs.google.com/spreadsheets/d/1gOA7MvBwOplVri6Qpct1xFaLvpzSIARL/edit#gid=1624894438",
  },
  {
    name: "Relación producto - planta",
    url: "https://docs.google.com/spreadsheets/d/1gfwZRVvG8vsSLWEJPzv594y7I4mp6s6v/edit#gid=702857277",
  },
  {
    name: "Relación regulación tipo de producto",
    url: "https://docs.google.com/spreadsheets/d/12_4tmxnVCs0-PLsrKUGyixT0AGNTbJ8n/edit#gid=1396467135",
  },
  {
    name: "Relación tipo de producto linea de producción",
    url: "https://docs.google.com/spreadsheets/d/1RxxMNiJwXpgBUWmSETya04LryCE8ItNr/edit#gid=2058687086",
  },
  {
    name: "Relación mercado - país",
    url: "https://docs.google.com/spreadsheets/d/1GdBhUtq8g0U-NqJW_sR2ndon_PJXOn-n/edit#gid=195186027",
  },
  {
    name: "Relación regulación - sustancia",
    url: "https://docs.google.com/spreadsheets/d/16iEYdoGxdlsdObBMeN2SAKrNy1TMGIvm/edit#gid=1794676152",
  },
  {
    name: "Relación insumo - certificación",
    url: "https://docs.google.com/spreadsheets/d/1WQQq4bVtGbPlikN8J7g54J0ubgoqd3QE/edit#gid=399730013",
  },
  {
    name: "Relación insumo - manufacturador - ficha de seguridad",
    url: "https://docs.google.com/spreadsheets/d/1bgdEn6balovFcNTa6WM0Di2aszROfmgC/edit#gid=276103651",
  },
  {
    name: "Tabla mantenedora SAP",
    url: "https://docs.google.com/spreadsheets/d/1Z434DzoHGCruuOhRPB9gWmvK6h8PAV6W/edit#gid=1283054842",
  },
  {
    name: "Sustancias críticos",
    url: "https://docs.google.com/spreadsheets/d/11OaHj9Ufb-5nZ0Rqts8tleiDtWI6PnFH/edit?rtpof=true#gid=1588624255",
  },
  {
    name: "Laboratorio - Análisis",
    url: "https://docs.google.com/spreadsheets/d/1naP6BJUReSVoygF9fgvu860rjJaGQbqt/edit#gid=1995392372",
  },
  {
    name: "Tabla análisis de laboratorios",
    url: "https://docs.google.com/spreadsheets/d/1naP6BJUReSVoygF9fgvu860rjJaGQbqt/edit#gid=1995392372",
  },
  {
    name: "Tabla concentraciones de producto",
    url: "",
  },
];

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

const LoadMasive = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [hiddenLoad, setHiddenLoad] = useState(true);
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [urlTable, setUrlTable] = useState("");
  const [numberLoadMasive, setNumberLoadMasive] = useState("");
  const [translate] = useTranslation("global");
  const navigate = useNavigate();

  const handleMultipleFiles = (e: any) => {
    setFiles(e.target.files);
  };

  const handleDeleteFile = (name: string) => {
    console.log(name);
    const newFiles: File[] = Array.from(files).filter(
      (file) => file.name !== name
    );

    console.log("newFiles => ", newFiles);
    setFiles(newFiles);
  };

  const handleClick = () => {
    navigate("/info_carga_masiva");
  };

  const handleChangeLoadFile = (event: any, newValue: string | null) => {
    setValue(newValue);
    setHiddenLoad(false);

    const findData = dataTable.find(data => data.name === String(newValue));
    if (findData) {
      console.log("Hola", findData);

      setUrlTable(findData.url);
    }

    document.getElementById("search-file")?.classList.add("input-form-lock");
    document.getElementById("search-file")?.classList.remove("input-form");

    setNumberLoadMasive("326");
    document
      .getElementById("numberLoadMasive")
      ?.classList.add("input-form-lock");
    document.getElementById("numberLoadMasive")?.classList.remove("input-form");

  };

  const handleInputChange = (event: any, newInputValue: any) => {
    setInputValue(newInputValue);

  };

  return (
    <BackgroungHome>
      <NavBarComponent displayArrow={"block"} returnTo={"/validacion_periodica"} displayHome={"block"}/>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "86vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Banner title={translate("loadMasive.header")}/>
        <Grid
          container
          justifyContent={"center"}
          sx={{marginTop: "10vh"}}
        >
          <Grid item xs={12}>
            <form
              style={{
                width: "40%",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Grid container>
                <Grid item xs={6} sx={{padding: "10px", paddingTop: "0", paddingBottom: "0"}}>
                  <label className="label-form" htmlFor="numberLoad">
                    Número de carga
                  </label>
                  <input
                    defaultValue={numberLoadMasive}
                    disabled={!hiddenLoad}
                    className="input-form"
                    type="text"
                    name="numberLoad"
                    id="numberLoadMasive"
                  />
                </Grid>
                <Grid item xs={6} sx={{padding: "15px", paddingTop: "5px", paddingBottom: "0"}}>
                  <label className="label-form" htmlFor="numberLoad">
                    Tabla de Carga:
                    <Autocomplete
                      disabled={!hiddenLoad}
                      value={value}
                      inputValue={inputValue}
                      onChange={handleChangeLoadFile}
                      onInputChange={handleInputChange}
                      id="controllable-states-demo"
                      options={filesLoad}
                      renderInput={(params) => (
                        <div ref={params.InputProps.ref}>
                          <input
                            type="text"
                            {...params.inputProps}
                            id="search-file"
                            className={"input-form"}
                          />
                        </div>
                      )}
                    />
                  </label>
                </Grid>
                <Grid item hidden={hiddenLoad} xs={12} sx={{padding: "10px", paddingTop: "0"}}>
                  <label className="label-form" htmlFor="numberLoad">
                    Descargue plantilla aquí
                  </label>
                  <Box className="input-form-lock" style={{position: "relative", cursor: "pointer", display: "flex"}}>
                    <a href={`${urlTable}`} style={{
                      textDecoration: "none",
                      color: "white",
                      position: "relative",
                      display: "flex",
                      width: "100%",
                      marginTop: "6px",
                      marginLeft: "5px",
                      overflow: "hidden"
                    }}
                       target="_blank" rel="noreferrer"> {urlTable}</a>
                  </Box>
                </Grid>
                <Grid
                  item
                  hidden={hiddenLoad}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box hidden={hiddenLoad}>
                    <Button
                      sx={{
                        maxWidth: "500px",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        backgroundColor: "#20844E",
                        borderRadius: 50,
                        border: "3px solid white",
                        padding: "5px 10px",
                        margin: "20px",
                        color: "white",
                        "&:hover":{
                          backgroundColor: "#20844E"
                        }
                      }}
                      component="label"
                    >
                      Elegir archivos
                      <input
                        type="file"
                        hidden
                        onChange={handleMultipleFiles}
                        name="files"
                        id="files"
                      />
                    </Button>
                  </Box>
                </Grid>
                <Grid item hidden={hiddenLoad} xs={12}>
                  {files.length > 0 && (
                    <ListFilesComponent
                      files={files}
                      handleDeleteFile={handleDeleteFile}
                    />
                  )}
                  <Alert severity="info" style={{
                    marginTop: "10px",
                    borderRadius: "10px",
                    padding: "0 10px",
                    backgroundColor: "#FFFFFF",
                    border: "3px solid #666666",
                    color:"#25834B",
                    fontWeight: "bold",
                  }}>
                    Recuerda que todos los datos deben estar ubicados en la
                    primera hoja del Libro Excel
                  </Alert>
                </Grid>
                <Grid
                  item
                  hidden={hiddenLoad}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box hidden={hiddenLoad}>
                    <ButtonComponent
                      title={"Iniciar Carga"}
                      color={"#20844E"}
                      handleClick={handleClick}
                    />
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
      <FooterComponent/>
    </BackgroungHome>
  );
};

export default LoadMasive;

/*<Box
      className={"config-img"}
      sx={{
        backgroundImage: `url(${fondoLab})`,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        position: "relative",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBarComponent displayArrow={"block"}/>
      <Banner title={translate("loadMasive.header")}/>
      <Grid
        container
        justifyContent={"center"}
        sx={{
          flex: "1 0 auto",
        }}
      >
        <Grid item xs={12}>
          <form
            style={{
              width: "40%",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Grid container>
              <Grid item xs={6} sx={{padding: "10px"}}>
                <label className="label-form" htmlFor="numberLoad">
                  Número de carga
                </label>
                <input
                  defaultValue={numberLoadMasive}
                  disabled={!hiddenLoad}
                  className="input-form"
                  type="text"
                  name="numberLoad"
                  id="numberLoadMasive"
                />
              </Grid>
              <Grid item xs={6} sx={{padding: "13px"}}>
                <label className="label-form" htmlFor="numberLoad">
                  Tabla de Carga:
                  <Autocomplete
                    disabled={!hiddenLoad}
                    value={value}
                    inputValue={inputValue}
                    onChange={handleChangeLoadFile}
                    onInputChange={handleInputChange}
                    id="controllable-states-demo"
                    options={filesLoad}
                    sx={{width: 300}}
                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                        <input
                          type="text"
                          {...params.inputProps}
                          id="search-file"
                          className={"input-form"}
                        />
                      </div>
                    )}
                  />
                </label>
              </Grid>
              <Grid item hidden={hiddenLoad} xs={12} sx={{padding: "10px"}}>
                <label className="label-form" htmlFor="numberLoad">
                  Selección
                </label>
                <a href={`${urlTable}`} className={"input-form"}
                   style={{maxWidth: "250px"}} target="_blank" rel="noreferrer"> {urlTable}</a>
              </Grid>
              <Grid
                item
                hidden={hiddenLoad}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box hidden={hiddenLoad}>
                  <Button
                    sx={{
                      backgroundColor: "#8DB763",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#8DB763",
                      },
                    }}
                    component="label"
                  >
                    Agregar archivos
                    <input
                      type="file"
                      hidden
                      onChange={handleMultipleFiles}
                      name="files"
                      id="files"
                      multiple
                    />
                  </Button>
                </Box>
              </Grid>
              <Grid item hidden={hiddenLoad} xs={12}>
                {files.length > 0 && (
                  <ListFilesComponent
                    files={files}
                    handleDeleteFile={handleDeleteFile}
                  />
                )}
                <Alert severity="info" style={{marginTop: "10px"}}>
                  Recuerda que todos los datos deben estar ubicados en la
                  primera hoja del Libro Excel
                </Alert>
              </Grid>
              <Grid
                item
                hidden={hiddenLoad}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Box hidden={hiddenLoad}>
                  <ButtonComponent
                    title={"Iniciar Carga"}
                    color={"#20844E"}
                    handleClick={handleClick}
                  />
                </Box>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <FooterComponent/>
    </Box>*/