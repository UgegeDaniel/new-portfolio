import React from 'react'
import './styles/About.css'
import { aboutMeText } from '../../utils'
const About = ({section}) => {
  return (
    <section className='about' id="about" ref={section}>
      <h2>Get To Know Me</h2>
      <div className="words">
        {aboutMeText}
      </div>
    </section>
  )
}
export default About;
