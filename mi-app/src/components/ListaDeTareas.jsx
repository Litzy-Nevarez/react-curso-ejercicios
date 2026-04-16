import React, { useEffect, useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

import { getTareas, crearTarea, eliminarTarea, completarTarea } from "../services/tareaServices";

import "./../css/ListaDeTareas.css";

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = async (tarea) => {
        if(tarea.texto.trim()) {
            const response = await crearTarea({
                title: tarea.texto,
                completed: false
            })

            const nuevaTarea = {
                id: response.data.id,
                texto: response.data.title,
                completada: response.data.completed
            }
            setTareas([...tareas, nuevaTarea]);
        }
    };

    const eliminarTareaApi = async (id) => {

        await eliminarTarea(id);

        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTareaApi = async (id) => {

        const tarea = tareas.find(tarea => tarea.id === id)

        const response = await completarTarea(id, {
            completed: !tarea.completada
        })        

        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = response.data.completed;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    useEffect(() => {

        const cargarTareas = async () => {
            const response = await getTareas();

            const tareasCargadas = response.data.map(tarea => ({
                id: tarea.id,
                texto: tarea.title,
                completada: tarea.completed
            }));
            setTareas(tareasCargadas);
        };

        cargarTareas();
    }, [])

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {tareas.map((tarea) => 
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTareaApi}
                        eliminarTarea={eliminarTareaApi}
                    />
                )}
            </div>
        </>
    );

}

export default ListaDeTareas;