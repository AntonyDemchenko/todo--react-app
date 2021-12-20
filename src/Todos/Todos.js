import './Todos.css';
import Modal from '../Modal/Modal';

import React, { useState, useEffect } from 'react';

function Todos() {

    // function showPopUp(i) {
    //     console.log(i);
    // }

    const [modalActive, setModalActive] = useState(false);

    let tasks = [];

    let addPoint = function () {
        tasks.push(<div>1</div>)
        console.log(tasks)
    }


    return (
        <div className="todos">

            <button onClick={() => { setModalActive(true); addPoint() }} className='create-item'>
                <img src={"plus.png"} alt="" className='create-item__img' />
            </button>

            <Modal active={modalActive} setActive={setModalActive} />
            {tasks}
        </div>
    )
};

export default Todos; 