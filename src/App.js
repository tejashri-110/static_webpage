import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Header, Facts, Reviews, Footer } from './components';
import { About } from './components';
import { Team } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header />
          <Home />
          <About />
          <Facts />
          <Reviews />
          <Team />
          <Footer />
        </Route>
      </Router>

    </div>
  );
}

export default App;
