import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
  faLinkedin,
  faSquareGithub,
  faX
);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
