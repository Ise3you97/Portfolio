import React, { useEffect, useRef, useState } from "react";
import "./Myworks.css";

/**
 * Componente Myworks que muestra una colección de tarjetas con un efecto de animación
 * cuando la sección es visible en el viewport.
 */
function Myworks() {
  // Estado para determinar si la sección es visible en el viewport
  const [isVisible, setIsVisible] = useState(false);

  // Referencia para el contenedor de las tarjetas
  const containerRef = useRef(null);

  useEffect(() => {
    // Configuración del Intersection Observer para detectar la visibilidad del contenedor
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Iniciar la observación del contenedor
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div id="work" className="work-container">
      {/* Contenedor de las tarjetas con animación condicional */}
      <div
        className={`card-container ${isVisible ? "animate-cards" : ""}`}
        ref={containerRef}
      >
        {/* Tarjeta 1 */}
        <div className="card card-back">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/6d0lje8jjo0inn5m73d4r/Spin-Cube-Icon.jpg?rlkey=ln9ihgevc5ks336dut9efxm8a&st=gw3tkpgm&dl=0"
            alt="Spin Cube 3D"
          />
          <i className="bi bi-suit-spade-fill card-icon-top-left"></i>
          <i className="bi bi-suit-spade-fill card-icon-bottom-right"></i>
          <div className="card-icon">
            <i className="bi bi-controller"></i>
          </div>
          <h2>
            <strong>Spin Cube 3D</strong>
          </h2>
          <p>
            Spin Cube 3D is a challenging 3D puzzle game that will test your
            mental agility and coordination.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.IseeDevGames.SpinCube3DPuzzle"
            className="button"
          >
            More Information
            <span className="material-symbols-outlined"></span>
          </a>
        </div>

        {/* Tarjeta 2 */}
        <div className="card card-2">
          <img
            src="https://dl.dropboxusercontent.com/scl/fi/ifgoam9n5oe4uabutrhue/Rain-Runner-icon.jpg?rlkey=7r532v0sfpxyo3qnum4uma1tc&st=85ad4org&dl=0"
            alt="Rain Runner"
          />
          <i className="bi bi-suit-spade-fill card-icon-top-left"></i>
          <i className="bi bi-suit-spade-fill card-icon-bottom-right"></i>
          <div className="card-icon">
            <i className="bi bi-controller"></i>
          </div>
          <h2>
            <strong>Rain Runner</strong>
          </h2>
          <p>
            Rain Runner is an addictive arcade game that tests your reflexes in
            a changing environment with persistent rain and shifting seasons.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.IseeDevGames.RainRunner"
            className="button"
          >
            More Information
            <span className="material-symbols-outlined"></span>
          </a>
        </div>
{/*
        {/* Tarjeta 3 *
        <div className="card card-3">
          <i className="bi bi-suit-spade-fill card-icon-top-left"></i>
          <i className="bi bi-suit-spade-fill card-icon-bottom-right"></i>
          <div className="card-icon">
            <i className="bi bi-code-slash"></i>
          </div>
          <h2>
            <strong>Web Site</strong>
          </h2>
          <p>loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
          <a href="#" className="button">
            More Information
            <span className="material-symbols-outlined"></span>
          </a>
        </div>
      /*}

        {/* Tarjeta frontal */}
        <div className="card card-front">
          <div className="card-icon-front">
            <i className="bi bi-briefcase"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myworks;
