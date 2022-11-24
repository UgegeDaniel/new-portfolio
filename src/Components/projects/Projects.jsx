import React from 'react';
import projects from '../../utils/projects.js';
import Project from './Project.jsx';
import './styles/Projects.css';

const Projects = ({section}) => {
  return (
    <section className="Projects" id="projects" ref={section}>
      <h2>My Projects</h2>
      <div>
        {projects.map((project, index) =>
          <Project key={index} {...project} />
        )}
      </div>
    </section>
  )
}

export default Projects;
