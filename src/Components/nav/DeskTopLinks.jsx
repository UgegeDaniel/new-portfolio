import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

const DeskTopLinks = ({handleClick, NavLinks}) => (
    <React.Fragment>
        <div onClick={handleClick} className="menu">
            <GiHamburgerMenu />
        </div>
        <div className='large' >
            <NavLinks/>
        </div>
    </React.Fragment>

)
export default DeskTopLinks