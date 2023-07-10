import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './TopButton.css';

function TopButton() {

  const [show, handleShow] = useState(false);
  function showButton() {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showButton);
    return () => window.removeEventListener("scroll", showButton);
  }, [])

  function scrollUp() {
    window.scrollTo(0, 0);
  }

  return (

    <button className={`top_button__main ${!show && "hidden"}`} onClick={scrollUp}>
      <FontAwesomeIcon icon="fa-solid fa-circle-up" color="#01F9FD" size='4x' />
    </button >

  )
}

export default TopButton
