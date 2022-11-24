import { Link } from 'react-scroll';

const NavLink = ({ handleClick, to, offset, text, className, activePage }) => (
    <Link
        className={`${className} ${activePage === to && "active-page"}`}
        onClick={(e) => handleClick(e, to)}
        activeClass="active"
        to={to} spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        >
        {text}
       
    </Link>
)
export default NavLink