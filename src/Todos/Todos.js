import './Todos.css';
import Modal from '../Modal/Modal';
import Tasks from '../Tasks/Tasks';
import img from '../plus.png';

import React, { useState, useEffect, useMemo } from 'react';

function Todos({ loading }) {
    // changing mode of modal window
    const [modalActive, setModalActive] = useState(false);

    // creating data for tasks rendering
    const [todos, setTodos] = useState([]);

    // state of the title of a task
    const [todoTitle, setTodoTitle] = useState('');

    // function a() {
    //     localStorage.setItem('a', 111);
    // }

    // a()
    // console.log('aaaaaaaaaaaaaaaaaaaaa')

    useEffect(() => {
        // console.log(todos)
        const raw = JSON.parse(localStorage.getItem('todos'));
        setTodos(raw);
        console.log(raw);
    }, [loading == true]);



    // setting data of task at the local storage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        // console.log('LS')
    }, [todos]);



    // creating new task item
    const addTodo = event => {
        if (todoTitle !== '') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false,
                },

            ]);

            setTodoTitle('');
        }
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