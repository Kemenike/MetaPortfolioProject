import React from 'react'
import "./SocialLink.css"

function SocialLink({ icon, labelName, link, target }) {
    return (
        <a href={link}
        target={target}
        className='socialLink__main'>
            {icon}
            <label for='brand__logo' className='brand__label'>{labelName} </label>
        </a>
    )
}

export default SocialLink