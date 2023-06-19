import React from 'react'
import "./Header.css"
import SocialLink from '../components/SocialLink.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoMain from '../assets/logo_man.png'
import logoBG from '../assets/logo_bg.png'

function Header() {
    return (
        <div className="header__container">
            <div className="logo__container">
                <img src={logoBG} className='logo logo__background' alt='logo background' />
                <div className='logo__twist__container'>
                    <img src={logoMain} className='logo logo__top' alt='logo' />
                </div>
            </div>
            <div className="brand__container">
                <SocialLink
                    icon={
                        <FontAwesomeIcon className='brand__logo' icon="fa-brands fa-linkedin" />
                    }
                    labelName="LinkedIn"
                    link='https://linkedin.com/in/kemenike/'
                    target='#'
                />
                <SocialLink
                    icon={
                        <FontAwesomeIcon className='brand__logo' icon="fa-brands fa-square-github" />
                    }
                    labelName="GitHub"
                />
                <SocialLink
                    icon={
                        <FontAwesomeIcon className='brand__logo' icon="fa-solid fa-laptop-code" />
                    }
                    labelName="Projects"
                />

            </div>
        </div>
    )
}

export default Header;