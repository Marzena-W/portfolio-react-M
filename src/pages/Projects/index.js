import React from 'react';
import Wrapper from "../../components/Wrapper";
import Project from "../../components/Project";
import projects from "../../projects.json";
import './style.css';

function Projects() {
  return (
    <div>
      <div className='projects-bckg'>
        <p className="projects-header">Portfolio</p>
        <p className="projects-subheader">Here are some projects I've worked on so far</p>
      </div>
      
      <Wrapper>
        {projects.map(function (project) {
          return <Project
            key={project.id}
            title={project.title}
            image={project.image}
            deployed={project.deployed}
            github={project.github}
          />
        })}
      </Wrapper>
    </div>

  );
}

export default Projects;