import React, { useState } from 'react';
import './AgregaTareas.css';

function AgregaTareas({ listaTareas, setListaTareas }) {
  const [inputTarea, setInputTarea] = useState('');
  const [contadorID, setContadorID] = useState(0);

  const esValida = (texto) => texto.trim().length > 0;

  const agregarTarea = () => {
    if (!esValida(inputTarea)) {
      alert('Por favor escribe algo válido');
      return;
    }

    const nuevaTarea = {
      id: contadorID,
      texto: inputTarea,
      fechaCreado: new Date(),
      estaTachado: false,
      fechaTachado: null
    };

    setContadorID(contadorID + 1);
    setListaTareas([...listaTareas, nuevaTarea]);
    setInputTarea('');
  };

  const tareaMasRapida = () => {
    const tareasTachadas = listaTareas.filter(t => t.estaTachado);

    if (tareasTachadas.length === 0) {
      console.log("ERROR: No hay tareas tachadas");
      return;
    }

    let tareaRapida = tareasTachadas[0];
    tareasTachadas.forEach(tarea => {
      const tiempoActual = tarea.fechaTachado - tarea.fechaCreado;
      const tiempoRapido = tareaRapida.fechaTachado - tareaRapida.fechaCreado;
      if (tiempoActual < tiempoRapido) {
        tareaRapida = tarea;
      }
    });

    alert(`La tarea más rápida fue "${tareaRapida.texto}", tardando ${(tareaRapida.fechaTachado - tareaRapida.fechaCreado)/ 60000} Minutos`);
  };

  return (
    <div className="agregador-tareas">
      <input
        type="text"
        value={inputTarea}
        onChange={(e) => setInputTarea(e.target.value)}
        placeholder="Agrega una tarea..."
      />
      <button onClick={agregarTarea}>Agregar</button>
      <button onClick={tareaMasRapida}>Tarea más rápida</button>
    </div>
  );
}

export default AgregaTareas;
