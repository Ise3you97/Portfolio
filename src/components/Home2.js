import React, { useState, useEffect } from "react";
import Buttonsbar from "./Buttonsbar";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa Bootstrap Icons para los íconos
import "./Home2.css";

function Home2() {
  // Estado para almacenar la posición del cursor
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Manejar el movimiento del cursor para actualizar la posición
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setCursorPos({ x, y });
  };

  // Agregar y quitar el evento de movimiento del cursor
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="home2" className="home2-container">
      <div
        className="home2-flip-card"
        style={{
          // Aplicar transformaciones basadas en la posición del cursor
          transform: `rotateY(${(cursorPos.x / window.innerWidth - 0.5) * 50}deg) rotateX(${(cursorPos.y / window.innerHeight - 0.5) * -15}deg)`,
        }}
      >
        <div className="home2-flip-card-inner">
          <div className="home2-flip-card-front">
            <i className="bi bi-suit-heart-fill card-icon-top-left"></i> {/* Icono de corazón en la esquina superior izquierda */}
            <i className="bi bi-suit-heart-fill card-icon-bottom-right"></i> {/* Icono de corazón en la esquina inferior derecha */}

            <img
              className="home2-img"
              src="https://dl.dropboxusercontent.com/s/vodtygz0r7ln6a8hfhe8w/avataaars.png?rlkey=sdi2pmyktn5m2q8c5ndhhhz8u&st=po0bnvbp"
              alt="Avatar"
            />
          </div>
          <div className="home2-flip-card-back">
            <i className="bi bi-suit-heart-fill card-icon-top-left"></i> {/* Icono de corazón en la esquina superior izquierda */}
            <i className="bi bi-suit-heart-fill card-icon-bottom-right"></i> {/* Icono de corazón en la esquina inferior derecha */}

            <h1 className="home2-title">¡Bienvenido a mi portafolio!</h1>
            <p className="home2-description">
              Aquí encontrarás información relevante sobre toda mi trayectoria.
              Explora mis proyectos, conoce más sobre mi experiencia en el desarrollo de juegos móviles en Unity y mi trabajo como desarrollador web full stack.
              Espero que disfrutes navegando y te encuentres inspirado por lo que ves.
              ¡Gracias por tu visita!
            </p>
          </div>
        </div>
      </div>
      <Buttonsbar /> {/* Componente de la barra de botones */}
    </div>
  );
}

export default Home2;
