import { useState } from 'react';
import './Task.css'



function Task({ id, title, completed }) {

    // console.log(id)

    return (
        <li className='tasks-item'
            key={id} >
            <input type="checkbox" />
            <strong >{title}</strong>
            <span>{new Date().toLocaleDateString()}</span>
            <button className="tasks-delete">&times;</button>
        </li >
    )
};

export default Task; 