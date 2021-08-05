import React from 'react';
import './task'
import Task from './task';
// import './app.css'

const Tasks = ({tasks}) => {
    return ( <div>
        {tasks.map(task => <Task task={task}/>)}
    </div> );

}
export default Tasks;