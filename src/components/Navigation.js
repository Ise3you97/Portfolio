// src/components/Navigation.js
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

function Navigation() {
  // Estado para rastrear el enlace activo
  const [activeLink, setActiveLink] = useState("home");

  // Maneja el clic en un enlace para actualizar el enlace activo
  const handleClick = (link) => {
    setActiveLink(link);
  };

  // Maneja el scroll para actualizar el enlace activo basado en la sección visible
  const handleScroll = () => {
    const sections = [
      "about",
      "home",
      "home2",
      "features",
      "pricing",
      "flipcard",
      "work",
      "contact",
    ];
    let currentSection = "home";

    // Recorre las secciones para determinar cuál está en vista
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= 70 && bottom >= 70) {
          currentSection = section;
        }
      }
    });

    // Actualiza el enlace activo
    setActiveLink(currentSection);
  };

  useEffect(() => {
    // Agrega el manejador de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el manejador de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="">
          <span className="portafolio-title">PORTFOLIO</span>
        </div>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <ScrollLink
              className={`nav-link ${activeLink === "home2" ? "active" : ""}`}
              to="home2"
              smooth={true}
              duration={100}
              offset={-70}
              onClick={() => handleClick("home2")}
            >
              HOME
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${activeLink === "flipcard" ? "active" : ""}`}
              to="flipcard"
              smooth={true}
              duration={100}
              offset={-70}
              onClick={() => handleClick("flipcard")}
            >
              ABOUT ME
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              to="about"
              smooth={true}
              duration={100}
              offset={-70}
              onClick={() => handleClick("about")}
            >
              CAREER
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${activeLink === "work" ? "active" : ""}`}
              to="work"
              smooth={true}
              duration={100}
              offset={-70}
              onClick={() => handleClick("work")}
            >
              PROJECTS
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              to="contact"
              smooth={true}
              duration={100}
              offset={-70}
              onClick={() => handleClick("contact")}
            >
              CONTACT
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
