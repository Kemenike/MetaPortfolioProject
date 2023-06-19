import React from 'react'
import "./SocialLink.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialLink({ icon, labelName, link, target }) {
    return (
        <a href={link}
        target={target}
        className='socialLink__main'>
            <FontAwesomeIcon className='brand__logo' icon={icon} />
            <label for='brand__logo' className='brand__label'>{labelName} </label>
        </a>
    )
}

export default SocialLink