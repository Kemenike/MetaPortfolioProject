import "./App.css";
import React from "react";
import AOS from 'aos'; // Animate On Scroll Lib
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import TopButton from './components/TopButton.jsx';
import Projects from './components/Projects.jsx';

//Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faX,
  faLaptopCode,
  faUserAstronaut,
  faCircleUp
} from "@fortawesome/free-solid-svg-icons";

//Global Imports for FontAwesome Icons
library.add(faLinkedin, faSquareGithub, faX, faLaptopCode, faUserAstronaut, faCircleUp);

//Animate On Scroll Initilization
AOS.init();

// Color Codes
  /* 
    bg - #121212
    blue - #01f9fd
    neon light candy red - #f701fd   => It's not pink I swear.
  */


function App() {

  return (
    <div className="App">
      <TopButton />
      <div className="wrapper">
        <Header />
        <Landing />
      </div>
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
