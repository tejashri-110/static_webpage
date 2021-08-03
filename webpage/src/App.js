import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Home} from './components';
import {About} from './components';
function App() {
  return (
    <div>
     
     <Router>
        <Route exact path="/">
          <Home/>
          <About/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
