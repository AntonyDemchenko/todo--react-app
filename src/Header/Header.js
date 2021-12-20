import './Header.css'
import { Link } from 'react-router-dom';

function Header(props) {
    let data = props.data.nav;
    // console.log(data);

    const button = data.map(item => <Link to={item.link} className='header__btn' key={item.text}>{item.text}</Link>);

    return (
        <div className="header">
            <div className='header__btns'>
                {button}
            </div>

        </div>
    )
};

export default Header; 