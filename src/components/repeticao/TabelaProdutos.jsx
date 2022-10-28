import React from "react";
import produtos from "../../data/produtos.js";
import "./tabela.css";

export default (props) => {

  function getLinhas() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} 
        className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R${produto.price.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};