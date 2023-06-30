import React from 'react'
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectCard({ title, bg_img, description, link, gh_link }) {
    return (
        <div className='project_card'>
            <a href={link}>
                <h1 className="project_card__title">
                    {title}
                </h1>
                <p className="project__description">
                    {description}
                </p>
                <a href={gh_link}>
                    <FontAwesomeIcon icon="fa-brands fa-square-github" />
                </a>
            </a>
        </div>
    )
}

export default ProjectCard