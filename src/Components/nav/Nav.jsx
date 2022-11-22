import React, { useState } from 'react'
import {NavLink, NavLinks, MobileLinks, DeskTopLinks} from './index'
import './styles/Nav.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='nav'>
      <div className='header'>
        <h1>
          <NavLink to="home" offset={-80} text="Ugege Daniel" />
        </h1>
        <DeskTopLinks handleClick={handleClick} NavLinks={NavLinks} />
      </div>
      <MobileLinks NavLinks={NavLinks} isOpen={isOpen} />
    </div>
  )
}

export default Nav;

