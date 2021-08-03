import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Home} from './components';
function App() {
  return (
    <div>
     
     <Router>
        <Route exact path="/">
          <Home/>
        </Route>
      </Router>

    </div>
  );
}

export default App;
