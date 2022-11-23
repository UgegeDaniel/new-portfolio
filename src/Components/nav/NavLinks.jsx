import { links } from '../../utils'
import { NavLink } from './index'

const NavLinks = ({ handleClick, activePage }) => (
    <ul style={{ pointerEvents: 'auto' }}>
        {links.map((link, index) =>
            <li key={index}>
                <NavLink key={index} handleClick={handleClick} {...link} activePage={activePage} />
            </li>
        )}
    </ul>
)
export default NavLinks