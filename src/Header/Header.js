import './Header.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
    let data = props.data.nav;
    // console.log(data);

    const button = data.map(item => <NavLink to={item.link} className='header__btn' key={item.text}>{item.text}</NavLink>);

    return (
        <div className="header">
            <div className='header__btns'>
                {button}
            </div>

        </div>
    )
};

export default Header; 