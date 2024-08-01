import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./About.css";

function About() {
  // Configure references and visibility state for each flip card
  const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: false });
  const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: false });
  const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: false });
  const { ref: cardRef4, inView: inView4 } = useInView({ triggerOnce: false });

  // Handle mouse movement to create a 3D tilt effect on flip cards
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".about-flip-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const rotateX = (deltaY / rect.height) * -7;
      const rotateY = (deltaX / rect.width) * 7;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  // Reset the tilt effect when the mouse leaves the card area
  const handleMouseLeave = () => {
    const cards = document.querySelectorAll(".about-flip-card");
    cards.forEach((card) => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  };

  // Attach and clean up event listeners for mouse movement and leave
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="about" className="about-flip-card-container">
      {/* First flip card with "About" information */}
      <div
        ref={cardRef1}
        className={`about-flip-card about-flip-card-1 ${
          inView1 ? "visible" : ""
        }`}
      >
        <div className="about-flip-card-inner">
          <div className="about-flip-card-front">
            <i className="bi bi-person-circle card-icon"></i>
          </div>
          <div className="about-flip-card-back">
            <h1>About</h1>
            <p>
              Hi, I'm Kelvin. I have over 3 years of experience in game development using Unity and 1 year in web development with React. I specialize in creating innovative and immersive experiences. My experience allows me to adapt and excel in both fields. I am looking to collaborate on projects that push the boundaries of storytelling, gameplay, and web functionality. My goal is to contribute to a dynamic team and revolutionize both industries.
            </p>
          </div>
        </div>
      </div>
      {/* Second flip card with "Experience" details */}
      <div
        ref={cardRef2}
        className={`about-flip-card about-flip-card-2 ${
          inView2 ? "visible" : ""
        }`}
      >
        <div className="about-flip-card-inner">
          <div className="about-flip-card-front">
            <i className="bi bi-book card-icon"></i> {/* Icon representing experience */}
          </div>
          <div className="about-flip-card-back">
            <h1>Experience</h1>
            <div className="tech-icon">
              <i className="bi bi-person-badge"></i>
              <p>
                <strong>Web Developer Freelancer</strong>
              </p>
            </div>
            <div className="tech-icon">
              <i className="bi bi-person"></i>
              <p>
                <strong>Junior Web Developer</strong>
              </p>
            </div>
            <div className="tech-icon">
              <i className="bi bi-controller"></i>
              <p>
                <strong>Game Developer</strong>
              </p>
            </div>
            <div className="tech-icon">
              <i className="bi bi-person"></i>
              <p>
                <strong>Game Designer</strong>
              </p>
            </div>
            <div className="tech-icon">
              <i className="bi bi-person"></i>
              <p>
                <strong>3D Modeler</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Third flip card with list of "Technologies" */}
      <div
        ref={cardRef3}
        className={`about-flip-card about-flip-card-3 ${
          inView3 ? "visible" : ""
        }`}
      >
        <div className="about-flip-card-inner">
          <div className="about-flip-card-front">
            <i className="bi bi-laptop card-icon"></i>
          </div>
          <div className="about-flip-card-back">
            <h1>Technologies</h1>
            <div className="technologies-icons">
              <div className="tech-icon">
                <i
                  className="bi bi-code-slash"
                  onClick={() => console.log("This is HTML")}
                ></i>
                <p>
                  <strong>HTML</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-paint-bucket"></i>
                <p>
                  <strong>CSS</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-braces"></i>
                <p>
                  <strong>JavaScript</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-box"></i>
                <p>
                  <strong>Laravel</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-database"></i>
                <p>
                  <strong>MongoDB</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-hdd"></i>
                <p>
                  <strong>MySQL</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-controller"></i>
                <p>
                  <strong>Unity</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-file-code"></i>
                <p>
                  <strong>C#</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-cpu"></i>
                <p>
                  <strong> React </strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-box-arrow-right"></i>
                <p>
                  <strong>Express</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-node-plus"></i>
                <p>
                  <strong>Node.js</strong>
                </p>
              </div>
              <div className="tech-icon">
                <i className="bi bi-git"></i>
                <p>
                  <strong>Git</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth flip card with "Skills" description */}
      <div
        ref={cardRef4}
        className={`about-flip-card about-flip-card-4 ${
          inView4 ? "visible" : ""
        }`}
      >
        <div className="about-flip-card-inner">
          <div className="about-flip-card-front">
            <i className="bi bi-gear-fill card-icon"></i>
          </div>
          <div className="about-flip-card-back">
            <h1>Skills</h1>
            <ul>
              <li>
                <strong>Web Development:</strong> API migration, responsive interface design and development, code debugging and optimization.
              </li>
              <li>
                <strong>Game Development:</strong> Creation and release of mobile games, level design, and innovative mechanics.
              </li>
              <li>
                <strong>Collaboration:</strong> Effective teamwork, project management, and clear communication.
              </li>
              <li>
                <strong>Adaptability:</strong> Ability to excel in both web development and game design.
              </li>
              <li>
                <strong>3D Modeling:</strong> Creation of assets for games and interactive applications.
              </li>
              <li>
                <strong>UI/UX:</strong> Designing user-friendly and user-centered interfaces.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
