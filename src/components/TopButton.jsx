import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './TopButton.css';

function TopButton() {
  return (
    <div className='top_button__main hidden'>
        <FontAwesomeIcon icon="fa-solid fa-circle-up" color="#01F9FD" size='4x'/>
    </div>
  )
}

export default TopButton
