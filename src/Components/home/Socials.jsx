import React from 'react'
import { socials } from '../../utils'
import './styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <div className="social">
        {socials.map((social, index)=><a href={social.link} target='_blank' rel='noreferrer' key={index}>
          <div className={social.className}>
            <social.icon />
          </div>
        </a>
        )}
      </div>
    </div>
  )
}

export default Socials