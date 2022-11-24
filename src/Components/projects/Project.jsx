import React from 'react'
import './styles/Project.css'

const Project = ({ name, desc, techs, liveLink, githubLink, category}) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{desc}</p>
      <div className="tech-stack">
        {techs.map(item => <div key={item}>{item}</div>)}
      </div>
      <div className="project-btns">
        <a href={liveLink} target="_blank" rel="noreferrer" className="demo">Demo</a>
        <a href={githubLink} target="_blank" rel="noreferrer" className='git-link'>Github</a>
      </div>
      {category && <div className="open">{category}</div>}
    </div>
  )
}

export default Project;
