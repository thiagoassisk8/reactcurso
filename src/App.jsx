import React, { useState } from "react";
import './app.css'
import './componentes/tasks'
import './componentes/addtask'
import Tasks from "./componentes/tasks";
import AddTask from "./componentes/addtask";

const App = () => {
  // let message = 'SAY MY NAME';
  const [tasks,setTasks] = useState([{id:'1',
  title:'Estudar programação',
  completed:true},
  {id:'2',
  title:'Andar de skate',
  completed:true},
  
])

const HandleTaskAddition = (TaskTitle) =>{
  const newTasks = [...tasks,{
    title: tasks.title,
    id:Math.random(10),
    completed: false,
  }];
  setTasks(newTasks)
}
  return(
    <div className = "container"> {<Tasks tasks = {tasks}></Tasks>}
    <AddTask HandleTaskAddition={HandleTaskAddition}/>
    {/* <button onClick={() => setTasks("Heisenberg")}>Mudar mensagem</button> */}
    
    </div>)
};

export default App;