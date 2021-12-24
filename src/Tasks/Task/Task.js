import { useState } from 'react';
import './Task.css'



function Task({ id, title, completed }) {

    // console.log(id)

    const [checked, setChecked] = useState(completed);


    const cls = ['task-item__content'];

    if (checked) {
        cls.push('completed')
    }

    return (
        <li className='tasks-item'>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <div className={cls.join(' ')}>
                <strong >{title}</strong>
                <span>{new Date().toLocaleDateString()}</span>
            </div>

            <button className="tasks-delete">&times;</button>
        </li >
    )
};

export default Task; 