import React from 'react'
import "./Header.css"
import logoMain from '../assets/logo_main.png'

function Header() {
    return (
        <div className="header__container">
            <div className="logo__container">
                <img 
                    src={logoMain}
                    alt=''
                    className='logo__main' />
            </div>
            <div className="link__container">
            </div>
        </div>
    )
}

export default Header;