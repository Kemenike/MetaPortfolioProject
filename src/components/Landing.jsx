import './Landing.css';
import React from 'react';
import Sparkles from '../assets/Sparkles';
import logo_man from '../assets/logo_man.png'

function Landing() {

  return (
    <div className='landing__main'>
      <div className="text__wrapper float">
        <h3 className='landing__subtitle subtitle'>
          Welcome! I'm
        </h3>
        <h1 className='landing__title title'>
          Kanayo Emenike
        </h1>
        <p className='description'>
          I am a 
          <span> Frontend Software Engineer </span>
          who loves a challenge.
          I take pride in building great, robust applications. Thanks for stopping by, here's a bit more about me.
        </p>
      </div>
      <div className="img__wrapper">
        <Sparkles />
        <img className="logoMan" src={logo_man} alt='' />
      </div>
    </div>
  )
}

export default Landing