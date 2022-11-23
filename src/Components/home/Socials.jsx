import React from 'react'
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { FaEnvelope } from 'react-icons/fa'
import './styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <div className="social">
        <a href="https://linkedin.com/in/favour-faiyetole" target='_blank' rel='noreferrer'>
          <div className='link ml'>
            <FaEnvelope />
          </div>
        </a>
        <a href="https://github.com/Dun-sin" target='_blank' rel='noreferrer'>
          <div className='git ml'>
            <AiFillGithub />
          </div>
        </a>
        <a href="https://linkedin.com/in/favour-faiyetole" target='_blank' rel='noreferrer'>
          <div className='link ml'>
            <AiFillLinkedin />
          </div>
        </a>
        <a href="https://twitter.com/DunsinWebDev" target='_blank' rel='noreferrer'>
          <div className='twit ml'>
            <AiFillTwitterCircle />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Socials