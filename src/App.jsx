import React, { useState } from 'react';
import AgregaTareas from './Modules/AgregaTareas/AgregaTareas';
import ListaTareas from './Modules/ListaDeTareas/ListaDeTareas';
import './App.css';

function App() {
  const [listaTareas, setListaTareas] = useState([]);

  return (
    <div className="todo-list">
              <h1>To Do List</h1>
      <section>
        <div className="contenido-todo-list">
          <AgregaTareas listaTareas={listaTareas} setListaTareas={setListaTareas} />
          <ListaTareas listaTareas={listaTareas} 
          setListaTareas={setListaTareas}/>
        </div>
      </section>
    </div>
  );
}

export default App;
