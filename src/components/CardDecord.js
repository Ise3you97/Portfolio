// src/components/CardDecord.js
import React from 'react';
import './CardDecord.css'; // Asegúrate de tener un archivo CSS para los estilos

function CardDecord({ top = '50%', left = '50%' }) {
  const cardStyle = {
    position: 'absolute', // Cambiado a absolute para posicionar dentro del contenedor
    top: top,
    left: left,
    width: '150px',
    height: '150px',
  };

  return (
    <div className="card-decord" style={cardStyle}>
      <div className="card-decord-inner">
        <div className="card-decord-front">
          {/* Contenido de la parte delantera de la tarjeta */}
          <span>Front</span>
        </div>
        <div className="card-decord-back">
          {/* Contenido de la parte trasera de la tarjeta */}
          <span>Back</span>
        </div>
      </div>
    </div>
  );
}

export default CardDecord;
