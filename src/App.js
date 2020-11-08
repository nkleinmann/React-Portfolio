import React from 'react';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Portfolio from './components/Portfolio.js'
import Contact from './components/ContactInfo.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App container-fluid background">
        {/* Set up Router */}


        {/* Resource: https://www.framer.com/blog/posts/react-portfolio/ */}
        <div className="row navigation navbar navbar-light bg-light">
          <div className=" col-12 navigation-sub">
            <Link to="/" className="item navbar-brand">Home </Link>
            <Link to="/about" className="item navbar-brand">About Me </Link>
            <Link to="/portfolio" className="item navbar-brand">Projects </Link>
            <Link to="/contact" className="item navbar-brand">Contact Info</Link>
          </div>
        </div>

        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
