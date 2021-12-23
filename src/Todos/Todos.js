import './Todos.css';
import Modal from '../Modal/Modal';
import Tasks from '../Tasks/Tasks';
import img from '../plus.png';

import React, { useState, useEffect } from 'react';

function Todos() {


    const [modalActive, setModalActive] = useState(false);

    const [todos, setTodos] = useState([
        { id: 1, title: "hello", completed: false },
        { id: 2, title: "helllllll no", completed: false },
        { id: 3, title: "helllllll no000", completed: false },
    ]);

    const [todoTitle, setTodoTitle] = useState('');

    const addTodo = event => {
        // if (event.key === 'Enter') {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                title: todoTitle,
                completed: false,
            },

        ])
        setTodoTitle('');
        // }
    }

    return (
        <div className="todos">

            <Tasks todos={todos} />


            <button onClick={() => { setModalActive(true); }} className='create-item'>
                <img src={img} alt="" className='create-item__img' />
            </button>

            <Modal active={modalActive}
                setActive={setModalActive}
                setTodoTitle={setTodoTitle}
                todoTitle={todoTitle}
                addTodo={addTodo}
            />
        </div>
    )
};

export default Todos; 