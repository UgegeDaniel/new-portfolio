import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

const DeskTopLinks = ({handleClick, NavLinks, activePage }) => (
    <React.Fragment>
        <div onClick={handleClick} className="menu">
            <GiHamburgerMenu />
        </div>
        <div className='large' >
            <NavLinks activePage={activePage} handleClick={handleClick}/>
        </div>
    </React.Fragment>
)
export default DeskTopLinks