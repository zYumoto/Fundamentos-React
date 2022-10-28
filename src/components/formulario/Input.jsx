import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>Component controlado com estado e evento de estado</span>
        <input value={valor} onChange={quandoMudar} />
        <span>Componente so para leitura que nao tem estado</span>
        <input value={valor} readOnly />
        <span>component nao controlado</span>
        <input value={undefined} />

        {/* Trabalhando com componentes com estados */}
      </div>
    </div>
  );
};