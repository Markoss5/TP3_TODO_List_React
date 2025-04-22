import { useState, useRef } from "react";
import "./AgregaTareas.css";

export default function AgregaTareas({ onAgregar }) {
  const [texto, setTexto] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAgregar(texto);
      setTexto("");
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-tarea">
      <input
        ref={inputRef}
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una tarea"
        aria-label="Nueva tarea"
      />
      <button 
        type="submit" 
        disabled={!texto.trim()}
        aria-label="Agregar tarea"
      >
        ➕ Agregar
      </button>
    </form>
  );
}