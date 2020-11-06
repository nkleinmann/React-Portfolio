import React from 'react';
import logo from './logo.svg';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js'
import Contact from './components/ContactInfo.js'
import About from './components/About.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        {/* Set up Router */}
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />

        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="item">About</Link>
            <Link to="/projects" className="item">Project</Link>
            <Link to="/contact" className="item">Contact Info</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
