import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Routes as Switch 
} from 'react-router-dom'
import Home from './components/home';
import NewsPage from './components/newsPage';
import AboutPage from './components/aboutPage';

function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg bg-light'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/News" className="nav-link">News</Link>
            </li>
            <li className='nav-item'>
              <Link to="/About" className="nav-link">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/News" element={<NewsPage />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/About" element={<AboutPage />}>
          </Route>
        </Switch>
        <footer className='page-footer font-small light'>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
