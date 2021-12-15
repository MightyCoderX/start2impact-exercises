import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

function Header({ title, onAdd, showAdd })
{
    const location = useLocation();

    return (
            <header className="header">
                <h1>{title}</h1>
                {location.pathname === '/' && <Button 
                    onClick={onAdd} 
                    color={showAdd ? 'tomato' : 'mediumseagreen'} 
                    text={ showAdd ? 'Close' : 'Add' } 
                />}
            </header>
    );
}

Header.defaultProps = {
    title: 'Task tracker'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
