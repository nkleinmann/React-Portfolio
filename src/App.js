import React from 'react';
import logo from './logo.svg';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js'
import Articles from './components/Articles.js'
import About from './components/About.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
    {/* Set up Router */}
    <Route exact path="/" component={Projects} />
    <Route path="/articles" component={Articles} />
    <Route path="/about" component={About} />

      <div className="navigation">
        <div className="navigation-sub">
          <Link to="/" className="item">Project</Link>
          <Link to="/articles" className="item">Articles</Link>
          <Link to="/about" className="item">About</Link>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
