import { Link } from 'react-scroll';

const NavLink = ({ handleClick, to, offset, text, className }) => (
    <Link
        className={className}
        onClick={handleClick}
        activeClass="active"
        to={to} spy={true}
        smooth={true}
        offset={offset}
        duration={500}>
        {text}
    </Link>
)
export default NavLink