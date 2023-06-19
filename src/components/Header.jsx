import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoMain from '../assets/logo_man.png'
import logoBG from '../assets/logo_bg.png'

function Header() {
    return (
        <div className="header__container">
            <div className="brand__container">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" color='white'/>
            </div>
            <div className="logo__container">
                <img src={logoBG} className='logo logo__background' alt='logo background' />
                <div className='logo__twist__container'>
                    <img src={logoMain} className='logo logo__top' alt='logo' />
                </div>
            </div>
        </div>
    )
}

export default Header;