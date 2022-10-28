import React from "react";
import If from './if'

export default props => {
    const usuario = props.usuario || {}
    return(
        <div>
            <If>
            Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
        </div>
    )
}