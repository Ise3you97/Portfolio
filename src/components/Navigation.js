// src/components/Navigation.js
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import { Offcanvas } from "react-bootstrap";

function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleClick = (link) => {
    setActiveLink(link);
    setShowOffcanvas(false); // Cierra el offcanvas al hacer clic en un enlace
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand">
            <span className="portafolio-title">PORTFOLIO</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleShow}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <div className="navbar-nav d-none d-lg-flex">
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

      {/* Offcanvas */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        className="offcanvas-custom"
      >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
