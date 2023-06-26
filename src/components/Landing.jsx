import './Landing.css';
import React from 'react';
import Sparkles from '../assets/Sparkles';
import logo_man from '../assets/logo_man.png'

function Landing() {
  return (
    <div className='landing__main'>
      <div className="text__wrapper">
        <h3 className='landing__subtitle subtitle'>
          Welcome to my page. I'm
        </h3>
        <h1 className='landing__title title'>
          Kanayo Emenike
        </h1>
      </div>
      <div className="img__wrapper">
        <Sparkles />
        <img className="logoMan" src={logo_man} alt='' />
      </div>
    </div>
  )
}

export default Landing