import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Header } from './components';
import { Home } from './components';
import { About } from './components';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header />
          <Home />
          <Home />
          <About />
        </Route>
      </Router>

    </div>
  );
}

export default App;
