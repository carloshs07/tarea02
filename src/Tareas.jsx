import React from "react";
import { useState } from "react";

function Tareas() {
    const [tareas, setTareas] = useState([]);
    const [nuevatarea, setNuevaTarea] = useState("");
    const [editartarea, setEditarTarea] = useState(null);
    const [toggle, setToggle] = useState(false);
    
    const agregarTarea = () => {
        if (nuevatarea.trim() === ""){
            alert("Por favor, ingresa una tarea.");
            return
        } 
        if (editartarea !== null) {
            const tareasActualizadas = tareas.map((t, index) =>
            index === editartarea ? nuevatarea : t
        );// tarea es el valor actual de la tarea, index es el índice de la tarea que se está editando
        // index === editartarea ? nuevatarea : t es una expresión ternaria que verifica si 
        // el índice actual es igual al índice de la tarea que se está editando. 
        // Si es así, se reemplaza con nuevatarea, de lo contrario, se mantiene la tarea original (t).

        setTareas(tareasActualizadas);
        setEditarTarea(null);
        } else {
        setTareas([...tareas, nuevatarea]);
        }
        setNuevaTarea("");
    };

    const eliminarTarea = (index) => {
        const tareasActualizadas = tareas.filter((_, i) => i !== index);
        setTareas(tareasActualizadas);
    }
    const eliminarTodas = () => {
        setTareas([]);
        setTimeout(() => {
            alert("Todas las tareas han sido eliminadas.");
        }, 500);
        
    }   
    const submitInfo = (event) => {
        event.preventDefault();
        agregarTarea();
    };

    return (
        <div className="container">
            <h1>Lista de Tareas</h1>

            <button type="button" onClick={() => setToggle(!toggle)}>
                {toggle ? "Ocultar Formulario" : "Mostrar Formulario"}
            </button>
            {toggle && (
                <form onSubmit={submitInfo}>
                    <input
                        type="text"
                        value={nuevatarea}
                        onChange={(event) => setNuevaTarea(event.target.value)}
                        placeholder="Escribe una tarea"
                    /> &nbsp;
                    <button type="submit">
                        {editartarea !== null ? "Actualizar" : "Agregar"}
                    </button>
                    &nbsp;
                    <button type="button" onClick={() => eliminarTodas([])}>Eliminar Todas</button>
                </form>
            )}
          
            {tareas.length === 0 && <p>No hay tareas.</p>}
            {tareas.length > 0 && <p>Tienes {tareas.length} tareas.</p>}
            {editartarea !== null && <p>Editando tarea: {tareas[editartarea]}</p>}
            <ul className="list-group">
                {tareas.map((t, index) => (
                    <li key={index}>
                        {t} &nbsp;
                        <button type="button" onClick={() => setEditarTarea(index)}>Editar</button>&nbsp;
                        <button type="button" onClick={() => eliminarTarea(index)}>Eliminar</button>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tareas;