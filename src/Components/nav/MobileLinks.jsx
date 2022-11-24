import {FaTimes} from 'react-icons/fa'
const MobileLinks = ({NavLinks, isOpen, activePage, handleClick, setOpenLinks}) => (
    <div className='small small-nav-container' style={{
        display: isOpen ? 'none' : 'flex'
    }}>
        <FaTimes className='close-links' onClick={(e) => setOpenLinks(false)}/>
        <NavLinks activePage={activePage} handleClick={handleClick}/>
    </div>
)
export default MobileLinks;