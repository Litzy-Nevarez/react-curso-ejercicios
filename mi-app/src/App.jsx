import { useState } from "react";
import { evaluate } from "mathjs";
import Boton from "./components/Boton";

import "./App.css";

function App() {


    const [pantalla, setPantalla] = useState("");

    const agregarValor = (valor) => {
        setPantalla(pantalla + valor);
    }

    const calcularResultado = () => {
        if(pantalla === "") return;
        setPantalla(evaluate(pantalla).toString());
    }

    return (
        <div className="App">
            <div className="contenedor">
                <div className="calculadora-pantalla">
                    {pantalla}
                </div>

                <div className="contenedor-botones">
                    <div className="fila">
                        <Boton valor="7" onClick={agregarValor} />
                        <Boton valor="8" onClick={agregarValor} />
                        <Boton valor="9" onClick={agregarValor} />
                        <Boton valor="-" onClick={agregarValor} />
                    </div>
                    <div className="fila">
                        <Boton valor="4" onClick={agregarValor} />
                        <Boton valor="5" onClick={agregarValor} />
                        <Boton valor="6" onClick={agregarValor} />
                        <Boton valor="*" onClick={agregarValor} />
                    </div>
                    <div className="fila">
                        <Boton valor="1" onClick={agregarValor} />
                        <Boton valor="2" onClick={agregarValor} />
                        <Boton valor="3" onClick={agregarValor} />
                        <Boton valor="/" onClick={agregarValor} />
                    </div>
                    <div className="fila">
                        <Boton valor="0" onClick={agregarValor} />
                        <Boton valor="." onClick={agregarValor} />
                        <Boton valor="=" onClick={calcularResultado} />
                        <Boton valor="+" onClick={agregarValor} />
                    </div>
                    <div className="boton-limpiar" onClick={() => setPantalla("")}>C</div>
                </div>
            </div>
        </div>
    );
}

export default App;
