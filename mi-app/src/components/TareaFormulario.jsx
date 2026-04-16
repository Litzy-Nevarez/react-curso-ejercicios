import { combinations } from "mathjs";
import React, { useState } from "react";
import './../css/TareaFormulario.css';
import { v4 as uuidv4 } from "uuid";

function TareaFormulario ({ onSubmit }) {

    const [input, setInput] = useState("");

    const manejarCambio = (e) => {
        setInput(e.target.value);
    }

    const manejarEnvio = (e) => {
        e.preventDefault();

        const tareaNueva = {
            texto: input,
            completada: false
        }

        onSubmit(tareaNueva);
    }

    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input
                className="tarea-input" 
                type="text" 
                placeholder="Escribe una nueva tarea..."
                name="texto"
                value={input}
                onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar</button>
        </form>
    )
}

export default TareaFormulario;