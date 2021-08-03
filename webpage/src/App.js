import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Header } from './components';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Router>

    </div>
  );
}

export default App;
