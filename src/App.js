import React from 'react';
import logo from './logo.svg';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import Contact from './components/ContactInfo.js';
import About from './components/About.js';
import Home from './components/Home.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App container-fluid background">
        {/* Set up Router */}

        {/* Resource: https://www.framer.com/blog/posts/react-portfolio/ */}
        <header className="row navigation navbar navbar-light bg-light">
          <div className=" col-12 navigation-sub">
            <Link to="/" className="item navbar-brand">Home </Link>
            <Link to="/about" className="item navbar-brand">About Me </Link>
            <Link to="/projects" className="item navbar-brand">Projects </Link>
            <Link to="/contact" className="item navbar-brand">Contact Info</Link>
          </div>
        </header>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />


      </div>
    </BrowserRouter>
  );
}

export default App;
