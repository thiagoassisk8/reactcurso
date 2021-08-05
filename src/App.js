import React, { useState } from "react";
import './app.css'
import './componentes/tasks'
import Tasks from "./componentes/tasks";

const App = () => {
  // let message = 'SAY MY NAME';
  const [tasks,setTasks] = useState([{id:'1',
  title:'Estudar programação',
  completed:true},
  {id:'2',
  title:'Andar de skate',
  completed:true},
  
])

  return(
    <div className = "container"> {<Tasks tasks = {tasks}></Tasks>}
    <button onClick={() => setTasks("Heisenberg")}>Mudar mensagem</button>
    
    </div>)
};

export default App;