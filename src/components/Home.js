// src/components/Home.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Home.css";

function Home() {
  // Estado para controlar el índice del slide actual
  const [activeIndex, setActiveIndex] = useState(0);

  // Maneja el cambio de slide
  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Contenido para cada slide
  const slideContent = [
    {
      title: "Home Page 1",
      description: "Contenido de la página de inicio 1.",
    },
    {
      title: "Home Page 2",
      description: "Contenido de la página de inicio 2.",
    },
    {
      title: "Home Page 3",
      description: "Contenido de la página de inicio 3.",
    },
  ];

  return (
    <div id="home" className="home-container">
      <div className="description">
        <div className="row">
          <div className="col-md-6 text-container">
            <h2>{slideContent[activeIndex].title}</h2>
            <p>{slideContent[activeIndex].description}</p>
          </div>
          <div className="col-md-6 image-container">
            <Carousel
              className="carousel-container"
              activeIndex={activeIndex}
              onSelect={handleSelect} // Maneja el cambio de slide
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/prod/image/upload/c_auto,g_auto,h_940,w_880/me/smart-crop-1.jpg
" // Reemplaza con la URL de tu imagen
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://dl.dropboxusercontent.com/s/odp5feiz10znnnn4uuxr5/Perfil.jpg?rlkey=9eai2zm4cj3dn89udxaotxhj4&st=mj5r9zoc
" // Reemplaza con la URL de tu imagen
                  alt="Slide 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://dl.dropboxusercontent.com/s/odp5feiz10znnnn4uuxr5/Perfil.jpg?rlkey=9eai2zm4cj3dn89udxaotxhj4&st=mj5r9zoc
" // Reemplaza con la URL de tu imagen
                  alt="Slide 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
