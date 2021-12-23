import { useState } from 'react';
import './Tasks.css'
import Task from "./Task/Task"



function Tasks({ todos }) {

    // const [checked, setChecked] = useState(todos.completed);


    // const cls = ['tasks-item'];

    // if (checked) {
    //     cls.push('completed')
    // }
    return (
        <div className='tasks'>
            <ul className='tasks-block'>
                {todos.map(item => <Task  {...item} />)}
            </ul>
        </div>
    )
};

export default Tasks; 