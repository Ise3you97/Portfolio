import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll"; // Importar ScrollLink para el desplazamiento suave
import "./Flipcard.css";

function Flipcard() {
  // Configurar referencias y estado de visibilidad para cada tarjeta flip
  const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: false });

  // Manejar el movimiento del mouse para crear un efecto de inclinación 3D en las tarjetas flip
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".flip-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const rotateX = (deltaY / rect.height) * -7; // Ajustar la rotación en el eje X
      const rotateY = (deltaX / rect.width) * 7; // Ajustar la rotación en el eje Y

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  // Restablecer el efecto de inclinación cuando el mouse sale del área de la tarjeta
  const handleMouseLeave = () => {
    const cards = document.querySelectorAll(".flip-card");
    cards.forEach((card) => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  };

  // Adjuntar y limpiar los oyentes de eventos para el movimiento y salida del mouse
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="flipcard" className="flip-card-container">
      {/* Primera tarjeta flip con información "About Me" */}
      <div
        ref={cardRef1}
        className={`flip-card flip-card-1 ${inView1 ? "visible" : ""}`}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <i
              className="bi bi-person"
              style={{ fontSize: "100px", color: "#ffffff" }}
            ></i>
          </div>
          <div className="flip-card-back">
            <ScrollLink
              className="btg"
              to="about" 
              smooth={true}
              duration={100}
              offset={-70}
            >
              Go
            </ScrollLink>
            <h2>
              <strong>ABOUT ME</strong>
            </h2>
            <p className="card-text">
              Here you will find information about me, my professional background,
              interests, and personal experiences. Explore to learn more about
              who I am and what drives me.
            </p>
          </div>
        </div>
      </div>
      {/* Segunda tarjeta flip con detalles de "My Projects" */}
      <div
        ref={cardRef2}
        className={`flip-card flip-card-2 ${inView2 ? "visible" : ""}`}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <i
              className="bi bi-briefcase"
              style={{ fontSize: "100px", color: "#ffffff" }}
            ></i>
          </div>
          <div className="flip-card-back">
            <ScrollLink
              className="btg"
              to="work" 
              smooth={true}
              duration={100}
              offset={-70}
            >
              Go
            </ScrollLink>
            <h2>
              <strong>MY PROJECTS</strong>
            </h2>
            <p className="card-text">
              Discover the projects I have worked on, including details about
              my role, the challenges I faced, and the solutions I implemented.
              Here you'll find my professional portfolio and work experience.
            </p>
          </div>
        </div>
      </div>
      {/* Tercera tarjeta flip con descripción de "Contact" */}
      <div
        ref={cardRef3}
        className={`flip-card flip-card-3 ${inView3 ? "visible" : ""}`}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <i
              className="bi bi-envelope"
              style={{ fontSize: "100px", color: "#ffffff" }}
            ></i>
          </div>
          <div className="flip-card-back">
            <ScrollLink
              className="btg"
              to="contact" 
              smooth={true}
              duration={100}
              offset={-70}
            >
              Go
            </ScrollLink>
            <h2>
              <strong>CONTACT</strong>
            </h2>
            <p className="card-text">
              If you want to get in touch with me, you will find my contact details
              and various ways to reach me here. I am available for new opportunities
              and collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
