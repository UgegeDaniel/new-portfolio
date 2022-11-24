import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

const DeskTopLinks = ({handleClick, NavLinks, activePage, setOpenLinks }) => (
    <React.Fragment>
        <div onClick={handleClick} className="menu">
            <GiHamburgerMenu onClick={()=> setOpenLinks(true)}/>
        </div>
        <div className='large' >
            <NavLinks activePage={activePage} handleClick={handleClick}/>
        </div>
    </React.Fragment>
)
export default DeskTopLinks