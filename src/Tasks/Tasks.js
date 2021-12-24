import { useState } from 'react';
import './Tasks.css'
import Task from "./Task/Task"



function Tasks({ todos }) {


    return (
        <div className='tasks'>
            <ul className='tasks-block'>
                {todos.map(item => <Task key={item.id} {...item} />)}
            </ul>
        </div>
    )
};

export default Tasks; 