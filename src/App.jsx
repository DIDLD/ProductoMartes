import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registro from "./components/Registro";
import InicioSesion from "./components/Inicio";
import Principal from "./components/Principal";
import Servi from "./components/Servi";
import Sobreno from "./components/Sobreno";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/inicioS" element={<InicioSesion />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/servi" element={<Servi />} />
        <Route path="/sobreno" element={<Sobreno />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
};

export default App;
