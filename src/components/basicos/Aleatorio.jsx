import React from "react";

export default props =>{
    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random()*(max - min)) + min;
    return(
        <div>
        <h2>VALOR ALEATORIO</h2>
        <p><strong>Valor Min:</strong>{min}</p>
        <p><strong>Valor Max:</strong>{max}</p>
        <p><strong>Valor Escolhido:</strong>{aleatorio}</p>

    </div>
    )
}