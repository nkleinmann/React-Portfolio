import React from 'react';
import logo from './logo.svg';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navigation from './components/navigation/navigation.js';
import Projects from './components/Projects.js'
import Contact from './components/ContactInfo.js'
import About from './components/About.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        {/* Set up Router */}

        <div className="row navigation">
          <div className=" col-12 navigation-sub">
            <Link to="/" className="item">About Me </Link>
            <Link to="/projects" className="item">Projects </Link>
            <Link to="/contact" className="item">Contact Info</Link>
          </div>
        </div>

        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />

      
      </div>
    </BrowserRouter>
  );
}

export default App;
