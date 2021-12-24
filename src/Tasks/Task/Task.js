import { useState, useContext } from 'react';
import './Task.css';
import Context from '../../Context/Context';



function Task({ id, title, completed }) {

    const { toggleTodo, removeTodo } = useContext(Context);

    // const [checked, setChecked] = useState(completed);


    const cls = ['task-item__content'];

    // if (checked) {
    //     cls.push('completed')
    // }

    if (completed) {
        cls.push('completed')
    }

    return (
        <li className='tasks-item'>

            <input type="checkbox"
                className='tasks-item__checkbox'
                checked={completed}
                // onChange={() => setChecked(!checked)}
                onChange={() => toggleTodo(id)} />

            <div className={cls.join(' ')}>
                <strong >{title}</strong>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <button className="tasks-add" >&Xi;</button>
            <button className="tasks-delete" onClick={() => removeTodo(id)}>&times;</button>
        </li >
    )
};

export default Task; 