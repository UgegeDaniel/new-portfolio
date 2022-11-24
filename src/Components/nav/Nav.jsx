import { useState } from 'react'
import { NavLink, NavLinks, MobileLinks, DeskTopLinks, ProximityEffect } from './index'
import './styles/Nav.css'
import { useRef, useEffect } from 'react'

const Nav = ({ sections }) => {
  const [activePage, setActivePage] = useState("home")
  const titleRef = useRef(null)
  const [isOpen, setIsOpen] = useState(true)
  const [openLinks, setOpenLinks] = useState(false)
  const handleClick = (e, to) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setActivePage(to);
  }
  useEffect(() => {
    window.onscroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY + 150;
        const offset = section.current.offsetTop;
        const height = section.current.offsetHeight;
        const id = section.current.getAttribute('id')
        if (top >= offset && top < offset + height) {
          setActivePage(id)
        }
      })
    }
  })
  return (
    <div className='nav'>
      <div className='header'>
        <h1 ref={titleRef}>
          <NavLink to="home" offset={-80} text="Ugege Daniel" handleClick={() => { return }} />
        </h1>
        <ProximityEffect titleRef={titleRef} />
        <DeskTopLinks handleClick={handleClick} NavLinks={NavLinks} activePage={activePage} setOpenLinks={setOpenLinks} />
      </div>
      {openLinks
        &&
        <MobileLinks NavLinks={NavLinks} isOpen={isOpen} handleClick={handleClick} activePage={activePage} setOpenLinks={setOpenLinks} />
      }
    </div>
  )
}

export default Nav;