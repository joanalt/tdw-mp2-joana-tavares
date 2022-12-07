import "./App.css";
import React from "react";
import Conteudo from "./components/Conteudo";
import Detalhes from "./components/Detalhes";
import Sobre from "./components/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Conteudo />} />
        <Route path={"/Detalhes"} element={<Detalhes />} />
        <Route path={"/Sobre"} element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
