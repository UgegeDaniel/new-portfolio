import React from 'react'
import './About.css'
import { aboutMeText } from '../../utils'
const About = () => {
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        {aboutMeText}
      </div>
    </div>
  )
}
export default About;
