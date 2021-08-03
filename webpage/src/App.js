import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import { Home, Header } from './components';
import { Home } from './components';
import { About } from './components';
=======
import {Home} from './components';
import {About} from './components';
import { Team } from "./components";
>>>>>>> Stashed changes
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
<<<<<<< Updated upstream
          <Header />
          <Home />
          <Home />
          <About />
=======
          <Home/>
          <About/>
          <Team/>
>>>>>>> Stashed changes
        </Route>
      </Router>

    </div>
  );
}

export default App;
