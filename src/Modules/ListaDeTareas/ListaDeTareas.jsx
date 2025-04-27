import React from 'react';
import Tarea from '../Tarea/Tarea';
import './ListaDeTareas.css';

function ListaDeTareas({ listaTareas, setListaTareas }) {

  const completarTarea = (id) => {
    const nuevasTareas = listaTareas.map(t =>
      t.id === id
        ? {
            ...t,
            estaTachado: !t.estaTachado, // invertir tachado
            fechaTachado: t.estaTachado ? null : new Date() // poner fecha si se tacha
          }
        : t
    );
    setListaTareas(nuevasTareas);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = listaTareas.filter(t => t.id !== id);
    setListaTareas(nuevasTareas);
  };

  return (
    <ul className="lista-tareas">
      {listaTareas.map((tarea) => (
        <Tarea
          key={tarea.id}
          tarea={tarea}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
}

export default ListaDeTareas;
