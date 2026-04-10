import React from "react";

function Boton({ valor, onClick }) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== ".") && (valor !== "=");
    }

    return (
        <div
            className={`boton ${esOperador(valor) ? 'operador' : ''}`}
            onClick={() => onClick(valor)}
        >
            {valor}
        </div>
    );

}

export default Boton;