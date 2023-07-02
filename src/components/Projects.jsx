import React from 'react'
import './Projects.css';
import ProjectCard from './ProjectCard';
import NetflixLogo from '../assets/Netflix_Logo_RGB.png'
import GoogleLogo from '../assets/Google_Logo_RGB.png'
import HairDayLogo from '../assets/HairDay_Logo.png'


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
                { /*
                TODO: Add Project Cards for Major Projects.
            */ }
                <ProjectCard
                    title="Netflix Clone ( Notflix )"
                    description="A clone of Netflix. This project uses FirebaseAuth, React Redux and the Stripe Webhook."
                    bg_img={NetflixLogo}
                    link="https://notflix-netflix.web.app"
                    gh_link="https://github.com/Kemenike/notflix"
                />
                <ProjectCard
                    title="Google Clone"
                    bg_img={GoogleLogo}
                    description="A clone of the Google Search Engine. I used the Google API to return real google results."
                    link="https://se-clone.web.app"
                    gh_link="https://github.com/kemenike/"

                />
                <ProjectCard
                    title="Meta Frontend Cert."
                    bg_img={HairDayLogo}
                    description="HTML Frontend Capstone Project. This was done to show how much CSS and HTML I've learned to that point. Since then my abilities have grown exponentially."

                />
            </div>
        </section>
    )
}

export default Projects