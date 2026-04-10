import { useState } from "react";
import "./css/AppLista.css";
import ListaDeTareas from "./components/ListaDeTareas";

function AppLista() {


    return (
        <div className="aplicacion-tareas">
            <div className="tareas-lista-principal">
                <h1>Mis Tareas</h1>
                <ListaDeTareas />
            </div>
        </div>
    );
}

export default AppLista;
