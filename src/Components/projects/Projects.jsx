import React from 'react';
import projects from '../../utils/projects.js';
import Project from './Project.jsx';
import './styles/Projects.css';

const Projects = () => {
  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
        {projects.map((project, index) =>
          <Project key={index} {...project} />
        )}
      </div>
    </div>
  )
}

export default Projects;
