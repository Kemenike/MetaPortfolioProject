import React from 'react'
import "./Header.css"
import logoMain from '../assets/logo_main.png'
import SocialLink from './SocialLink.jsx'

function Header() {
    return (
        <div className="header__container" >
            <div className="logo__container">
                <img
                    src={logoMain}
                    alt=''
                    className='logo__main' />
            </div>
            <div className="link__container">
                <SocialLink
                    icon="fa-brands fa-linkedin"
                    labelName="LinkedIn"
                    link="https://linkedin.com/in/kemenike"
                    target="#"
                />
                <SocialLink 
                    icon="fa-brands fa-square-github"
                    labelName="GitHub"
                    link="https://github.com/kemenike"
                    target="#"
                />
                <SocialLink 
                    icon="fa-brands fa-square-github"
                    labelName="Projects"
                    link="#projects__main"
                />
                <SocialLink 
                    icon="fa-free-solid fa-user-astronaut"
                    labelName="About Me"
                    link="#about_me__main"
                />
            </div>
        </div>
    )
}

export default Header;