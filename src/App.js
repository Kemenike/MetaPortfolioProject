import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faX,
  faLaptopCode,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faSquareGithub, faX, faLaptopCode, faUserAstronaut);

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Landing />
      </div>
    </div>
  );
}

export default App;
