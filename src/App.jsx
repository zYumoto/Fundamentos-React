import "./App.css";
import React from "react";
// Importando CSS
import "./index.css";
// Importando primeiro componente
import Primeiro from "./components/basicos/Primeiro.jsx";
// Segundo componente

import DiretaPai from "./components/comunicacao/DiretaPai";
import Usuarioinfo from "./components/condicional/Usuarioinfo";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmentos";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
    <Card title="#09 - Comunicação direta" color="#371B58">
        <DiretaPai></DiretaPai>
      </Card>
      
      <Card title="#08 - Renderização condicional" color="#4C3575">
        <ParOuImpar numero={21}></ParOuImpar>
        <Usuarioinfo usuario={{nome: 'Davi'}} />
      </Card>

      <Card title="#07 - Exercicio Repeticao" color="#4B5D67">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card title="#06 - Repetição" color="#4B5D67">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card title="#05 - Componentes Filhos" color="#3C2C3E">
        <Familia sobrenome="Venchiarutti">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Lucas" />
          <FamiliaMembro nome="Gabriela" />
        </Familia>
      </Card>
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