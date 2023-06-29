import React from 'react'
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section id='projects__main'>
            <h1 className="projects__title">
                Projects
            </h1>
            <div className="projects__description">
                <h3 className="description"> 
                    These are a few of my projects. Check them out. 👇
                </h3>
            </div>
            <ProjectCard 
                title="Netflix Clone"
            />
        </section>
    )
}

export default Projects