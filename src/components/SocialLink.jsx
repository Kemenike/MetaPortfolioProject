import React from 'react'
import "./SocialLink.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialLink({ icon, labelName, link, target }) {
    return (
        <a href={link}
        target={target}
        className='socialLink__main'>
            <FontAwesomeIcon className='brand__logo' size='4x' icon={icon} />
            <p className='brand__label'>{labelName}</p>
        </a>
    )
}

export default SocialLink