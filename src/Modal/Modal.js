import './Modal.css'

function Modal({ active, setActive }) {

    return (

        <div className={active ? "modal-screen active" : "modal-screen"} onClick={() => setActive(false)}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <input type="text" className="popup__input" />
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => setActive(false)}>cancel</button>
                    <button className="popup__btn" onClick={() => setActive(false)}>create</button>
                </div>
            </div>

        </div>

    )
};

export default Modal; 