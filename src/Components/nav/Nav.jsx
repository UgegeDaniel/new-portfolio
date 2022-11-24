import { useState } from 'react'
import { NavLink, NavLinks, MobileLinks, DeskTopLinks, ProximityEffect } from './index'
import './styles/Nav.css'
import { useRef } from 'react'

const Nav = () => {
  const titleRef = useRef(null)
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
        <h1 ref={titleRef}>
          <NavLink to="home" offset={-80} text="Ugege Daniel" handleClick={() => { return }} />
        </h1>
        <ProximityEffect titleRef={titleRef} />
        <DeskTopLinks handleClick={handleClick} NavLinks={NavLinks} activePage={activePage} />
      </div>
      <MobileLinks NavLinks={NavLinks} isOpen={isOpen} />
    </div>
  )
}

export default Nav;