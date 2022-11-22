import { NavLink } from '../nav';
import { handleDownload } from '../../utils'
const HomeCta = () => (
    <div className="btns">
        <NavLink
            className='btn1'
            to="mail"
            offset={0}
            text="Hire Me"
        />
        <div onClick={handleDownload} className='btn2'>View Resume</div>
    </div>
)
export default HomeCta;