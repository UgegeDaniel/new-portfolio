import React from 'react'
import { CgArrowLongUp } from 'react-icons/cg';
import { animateScroll } from 'react-scroll';
import './styles/footer.css'
const Footer = () => (
    <div className='footer'>
        <p>Thank you for scrolling😊</p>
        <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
        </div>
    </div>
)
export default Footer;