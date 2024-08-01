import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link as ScrollLink, scroller } from 'react-scroll';
import './UpButton.css'; // Asegúrate de crear y definir los estilos en este archivo CSS

function UpButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
  
      <ScrollLink
      className={`up-button ${visible ? 'show' : ''}`}
      to="flipcard"
      smooth={true}
      duration={100}
      offset={-70}
    >
        
    <i className="bi bi-arrow-up"></i>

    </ScrollLink> 
   
);
}

export default UpButton;
