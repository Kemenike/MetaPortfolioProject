import './App.css';
import Header from './components/Header'
import Landing from './components/Landing'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faX, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

library.add(
  faLinkedin,
  faSquareGithub,
  faX,
  faLaptopCode
);

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
