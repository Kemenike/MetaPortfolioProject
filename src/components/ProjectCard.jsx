import React from 'react'
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard({ title, bg_img, description, link, gh_link }) {

    return (
        <div className='project_card'>
            <a href={link} target="#">
                <h1 className="project_card__title">
                    {title}
                </h1>
                <p className="project__description">
                    {description}
                </p>
                <img src={bg_img} alt="" />
            </a>
            <a className="gh_link" target="#" href={gh_link}>
                <FontAwesomeIcon icon="fa-brands fa-square-github" />
            </a>
        </div>
    )
}

export default ProjectCard