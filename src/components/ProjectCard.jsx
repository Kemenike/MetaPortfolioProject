import React from 'react'
import './ProjectCard.css';

function ProjectCard({title, bg_img, description, link, gh_link}) {
  return (
    <div className='project_card'>
        <h1 className="project_card__title">
            {title}
        </h1>
    </div>
  )
}

export default ProjectCard