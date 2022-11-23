import React from 'react'
import './About.css'
import { aboutMeText } from '../../utils'
const About = () => {
  return (
    <section className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        {aboutMeText}
      </div>
    </section>
  )
}
export default About;
