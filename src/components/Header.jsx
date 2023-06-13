import React from 'react'
import "./Header.css"

import logoMain from '../assets/logo_man.png'
import logoBG from '../assets/logo_bg.png'

function Header() {
    return (
        <div className="header__container">
            <div className="brand__container">

            </div>
            <div className="logo__container">
                <img src={logoBG} className='logo background' alt='logo background' />
                <img src={logoMain} className='logo top' alt='logo' />
            </div>
        </div>
    )
}

export default Header;