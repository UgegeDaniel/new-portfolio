import { links } from '../../utils'
import { NavLink } from './index'

const NavLinks = ({ handleClick }) => (
    <ul style={{ pointerEvents: 'auto' }}>
        {links.map((link, index) => <li key={index}><NavLink key={index} handleClick={handleClick} {...link} /></li>)}
    </ul>
)
export default NavLinks