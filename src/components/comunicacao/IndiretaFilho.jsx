import React from "react";

export default (props) => {
    return (
        <div>
          <div>Filho</div>
          <button
            onClick={(e) => {props.quandoClicar("Joao", 53, true)}}>
            Fornecer Informaçoes
          </button>
        </div>
      );
};