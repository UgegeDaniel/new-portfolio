import React from 'react'
import { CgArrowLongUp } from 'react-icons/cg';
import { animateScroll } from 'react-scroll';

const Footer = () => (
    <React.Fragment>
        <p>Thank you for scrolling😊</p>
        <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
        </div>
    </React.Fragment>
)
export default Footer;