import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Flipcard from './components/Flipcard';
import Home2 from './components/Home2';
import About from './components/About';
import Myworks from './components/Myworks';
import Contact from './components/Contact';
import UpButton from './components/UpButton';

function App() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    document.title = "PORFOLIO"
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className='App'>
      <ul className="circles">
        {[...Array(20)].map((_, i) => <li key={i}></li>)} {/* Genera círculos dinámicamente */}
      </ul>
      <Router>
        <Container>
          <Navigation />
          <Home2 />
          <Flipcard />
          <About />
          <Myworks />
          <Contact />
          <UpButton />
          <Routes>
            
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
