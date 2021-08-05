import React from 'react';
import './taskDesign.css'


const Task = ({task}) => {
    return ( <div className='taskcontainer'>
        {task.title}
    </div> );
}
 
export default Task;