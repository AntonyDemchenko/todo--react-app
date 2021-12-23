import './Modal.css';

function Modal({ active, setActive, setTodoTitle, todoTitle, addTodo }) {

    return (

        <div className={active ? "modal-screen active" : "modal-screen"} onClick={() => setActive(false)}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>

                <input type="text"
                    className="popup__input"
                    placeholder='Type your text'
                    value={todoTitle}
                    onChange={event => setTodoTitle(event.target.value)}
                // onKeyPress={addTodo}
                />

                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => setActive(false)}>cancel</button>
                    <button className="popup__btn" onClick={() => { setActive(false); addTodo() }}>create</button>
                </div>
            </div>

        </div>

    )
};

export default Modal; 