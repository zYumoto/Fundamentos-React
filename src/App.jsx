import "./App.css";
import React from "react";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro.jsx";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmentos";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default () => (
  <div className="App">
<h1>Fundamentos React</h1>

    <div className="Cards">
      <Card title="#04 - Desafio Aleatorio" color="#1F4690">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card title="#03 - Fragmento" color="#3A5BA0">
        <Fragmento />
      </Card>
      <Card title="#02 - Com Parametro" color="#FFA500">
        {/* passando propriedades */}
        <ComParametro titulo="Situação do aluno" aluno="Pedro" nota="4.5" />
      </Card>
      <Card title="#01 - Primeiro Componete" color="#4C3575">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);