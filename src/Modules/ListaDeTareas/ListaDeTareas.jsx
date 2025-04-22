import { useState, useEffect } from "react";
import AgregaTareas from "../AgregaTareas/AgregaTareas";
import "./ListaDeTareas.css";

export default function ListaDeTareas() {
  const [tareas, setTareas] = useState(() => {
    const saved = localStorage.getItem("tareas");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false,
      modoEdicion: false,
      eliminando: false
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const toggleCompletar = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? {...t, completada: !t.completada} : t
    ));
  };

  const activarEdicion = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? {...t, modoEdicion: true} : t
    ));
  };

  const guardarEdicion = (id, nuevoTexto) => {
    setTareas(tareas.map(t => 
      t.id === id ? {...t, texto: nuevoTexto, modoEdicion: false} : t
    ));
  };

  const borrarCompletadas = () => {
    setTareas(tareas.map(t => ({...t, eliminando: t.completada})));
    setTimeout(() => {
      setTareas(tareas.filter(t => !t.completada));
    }, 300);
  };

  const borrarTodo = () => {
    setTareas(tareas.map(t => ({...t, eliminando: true})));
    setTimeout(() => setTareas([]), 300);
  };

  return (
    <div className="contenedor-tareas">
      <h1>📝 Mis Tareas</h1>
      <AgregaTareas onAgregar={agregarTarea} />
      
      {tareas.length === 0 ? (
        <p className="sin-tareas">No hay tareas. ¡Agrega una!</p>
      ) : (
        <>
          <ul className="lista-tareas">
            {tareas.map((tarea) => (
              <div key={tarea.id} className={tarea.eliminando ? "tarea-eliminada" : ""}>
                <Tarea
                  tarea={tarea}
                  onEliminar={() => {
                    setTareas(tareas.map(t => 
                      t.id === tarea.id ? {...t, eliminando: true} : t
                    ));
                    setTimeout(() => eliminarTarea(tarea.id), 300);
                  }}
                  onToggleCompletar={() => toggleCompletar(tarea.id)}
                  onEditar={() => activarEdicion(tarea.id)}
                  onGuardar={(nuevoTexto) => guardarEdicion(tarea.id, nuevoTexto)}
                />
              </div>
            ))}
          </ul>
          
          <div className="acciones-rapidas">
            <button 
              onClick={borrarCompletadas} 
              disabled={!tareas.some(t => t.completada)}
            >
              🧹 Borrar Completadas
            </button>
            <button 
              onClick={borrarTodo} 
              disabled={tareas.length === 0}
            >
              ❌ Borrar Todo
            </button>
          </div>
          
          <p className="contador-tareas">
            {tareas.filter(t => t.completada).length} de {tareas.length} completadas
          </p>
        </>
      )}
    </div>
  );
}