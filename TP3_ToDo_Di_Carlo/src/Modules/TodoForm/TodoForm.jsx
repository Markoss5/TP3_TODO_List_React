import { useState } from 'react'

import './TodoForm.css'

function TodoForm() {


  return (
    <>
    <input type="text" class="input-item" id="tareaAagregar" placeholder="Agregue una tarea" required/>
    <button id="input-button" onclick="agregarTarea()">Agregar</button>
    </>
  )
}

export default TodoForm