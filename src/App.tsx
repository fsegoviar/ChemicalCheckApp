import React from 'react';
import i18next from "i18next";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SelectLanguage from "./pages/SelectLanguage/SelectLanguage";
import global_es from "./translations/es/global.json";
import global_por from "./translations/por/global.json";
import Home from "./pages/Home/Home";
import ListChemicalRegister from "./pages/ListChemicalRegister/ListChemicalRegister";
import ValidateCAS from "./pages/ValidateCAS/ValidateCAS";
import PeriodicValidation from "./pages/PeriodicValidation/PeriodicValidation";
import Reports from "./pages/Reports/Reports";
import RegisterChemical from "./pages/RegisterChemical/RegisterChemical";
import AnalysisRegulations from "./pages/PeriodicValidation/AnalysisRegulations";
import AnualAnalysis from "./pages/PeriodicValidation/AnualAnalysis";
import NewChemical from "./pages/RegisterChemical/NewChemical";
import ReviewTicket from "./pages/RegisterChemical/ReviewTicket";
import UnlockChemical from "./pages/UnlockChemical/UnlockChemical";
function App() {

  //Translation
  i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
      es: {
        global: global_es,
      },
      por: {
        global: global_por,
      },
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"language"} element={<SelectLanguage />}/>
        <Route path={"/"} element={<Home />}/>
        <Route path={"listado_insumos"} element={<ListChemicalRegister />}/>
        <Route path={"validar_cas"} element={<ValidateCAS />}/>
        <Route path={"validacion_periodica"} element={<PeriodicValidation />}/>
        <Route path={"validacion_periodica/analisis_anual"} element={<AnualAnalysis />}/>
        <Route path={"validacion_periodica/analisis_por_regulaciones"} element={<AnalysisRegulations />}/>
        <Route path={"reportes"} element={<Reports />}/>
        <Route path={"registrar_insumo"} element={<RegisterChemical />}/>
        <Route path={"registrar_insumo/nuevo_registro"} element={<NewChemical />}/>
        <Route path={"registrar_insumo/revisar_solicitud"} element={<ReviewTicket />}/>
        <Route path={"desbloquear_insumo"} element={<UnlockChemical />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
