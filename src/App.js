import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Routes as Switch 
} from 'react-router-dom'
import Home from './components/home';
import NewsPage from './components/newsPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
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
        </Switch>
        <footer className='App-footer'>

        </footer>
      </div>
    </Router>
  );
}

export default App;
