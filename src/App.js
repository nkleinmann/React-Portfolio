import React from 'react';
import logo from './logo.svg';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js'
import Contact from './components/ContactInfo.js'
import About from './components/About.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        {/* Set up Router */}

{/* Resource: https://www.framer.com/blog/posts/react-portfolio/ */}
        <div className="row navigation navbar navbar-light bg-light">
          <div className=" col-12 navigation-sub">
            <Link to="/" className="item navbar-brand">About Me </Link>
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
