import PropTypes from 'prop-types';
import Button from './Button';

function Header({title})
{
    function onClick(e)
    {
        console.log('Click');
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Add" />
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
