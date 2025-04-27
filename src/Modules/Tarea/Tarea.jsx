import React from 'react';
import './Tarea.css';

function Tarea({ tarea, completarTarea, eliminarTarea }) {
  return (
    <li className={`tarea ${tarea.estaTachado ? "completada" : ""}`}>
      <div className="contenido-tarea">
        <span className="texto-tarea">{tarea.texto}</span>
        <small className="fecha-tarea">{tarea.fechaCreado.toLocaleString()}</small>
      </div>

      <div className="acciones-tarea">
        <button className="btn-tachar" onClick={() => completarTarea(tarea.id)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </button>

        <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#f00" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="24" stroke-dashoffset="24" d="M12 20h5c0.5 0 1 -0.5 1 -1v-14M12 20h-5c-0.5 0 -1 -0.5 -1 -1v-14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M4 5h16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M10 4h4M10 9v7M14 9v7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/></path></g></svg>
        </button>
      </div>
    </li>
  );
}

export default Tarea;
