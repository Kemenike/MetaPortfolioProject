import React from 'react'
import './Projects.css';
import ProjectCard from './ProjectCard';
import NetflixLogo from '../assets/Netflix_Logo_RGB.png'

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
            <div className="display__segment">
                <ProjectCard
                    title="Netflix Clone ( Notflix )"
                    description="A clone of Netflix. This project uses FirebaseAuth, React Redux and the Stripe Webhook."
                    bg_img={NetflixLogo}
                />
                <ProjectCard
                    title="Google Clone"
                />
                <ProjectCard
                    title="Netflix Clone"
                />
                <ProjectCard
                    title="Netflix Clone"
                />
            </div>
        </section>
    )
}

export default Projects