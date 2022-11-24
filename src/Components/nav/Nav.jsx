import { useState } from 'react'
import { NavLink, NavLinks, MobileLinks, DeskTopLinks, ProximityEffect } from './index'
import './styles/Nav.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [activePage, setActivePage] = useState("home")
  const handleClick = (e, to) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setActivePage(to);
  }
  return (
    <div className='nav'>
      <div className='header'>
        <h1>
          <NavLink to="home" offset={-80} text="Ugege Daniel" />
        </h1>
        <ProximityEffect />
        <DeskTopLinks handleClick={handleClick} NavLinks={NavLinks} activePage={activePage} />
      </div>
      <MobileLinks NavLinks={NavLinks} isOpen={isOpen} />
    </div>
  )
}

export default Nav;