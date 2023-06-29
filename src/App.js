import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import TopButton from './components/TopButton.jsx';
import Projects from './components/Projects.jsx';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faX,
  faLaptopCode,
  faUserAstronaut,
  faCircleUp
} from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faSquareGithub, faX, faLaptopCode, faUserAstronaut, faCircleUp);

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
