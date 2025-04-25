import React, { useState } from 'react'
import './AgregaTareas.css'


function AgregaTareas(){
  const [Tareas, setTareas] = useState([])  
let agregarTareaa=()=>{
    //Tomar valor del input y llamar a set tareas y agregarle el valor al array
  }
  
  return(
    <>
      <div id="todo-form">
        <input type="text" className="input-item" id="tareaAagregar"   value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Agregue una tarea" required/>
        <button id="input-button" onClick={agregarTareaa(Tarea)}>Agregar</button>
    </div>
    </>
  )

  }

  export default AgregaTareas

/*
  import React, { useState } from 'react';

function AgregaTareas() {
  const [inputValue, setInputValue] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (inputValue.trim() !== '') {
      setTareas([...tareas, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Agregue una tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>

      {/* Mostrar lista de tareas */}
//       <ul>
//         {tareas.map((tarea, index) => (
//           <li key={index}>{tarea}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AgregaTareas;*/