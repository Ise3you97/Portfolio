// src/components/Pricing.js
import React from 'react';
import './Pricing.css'; // Asegúrate de importar el archivo CSS correspondiente

function Pricing() {
  return (
    <div id="pricing" className="pricing-container">
      <div className="profile-container">
        <div className="profile-circle">
          <img 
            src="https://www.dropbox.com/scl/fi/odp5feiz10znnnn4uuxr5/Perfil.jpg?rlkey=9eai2zm4cj3dn89udxaotxhj4&st=rr5iyf06&dl=0
" // Reemplaza con la URL de tu imagen
            alt="Profile"
            className="profile-image"
          />
        </div>
        <h2 className="profile-name">Kelvin Solano</h2>
        <p className="profile-phone">Teléfono: +123 456 7890</p>
        <p className="profile-email">Email: kelvin@example.com</p>
      </div>
        {/* Segundo contenedor */}
        <div className="profile-container">
        <div className="profile-circle">
          <img
            src="https://via.placeholder.com/120x120?text=Image+2" // Reemplaza con la URL de tu imagen
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-name">Kelvin Solano</div>
        <div className="profile-phone">+1234567890</div>
        <div className="profile-email">kelvin@example.com</div>
      </div>
      {/* Tercer contenedor */}
      <div className="profile-container">
        <div className="profile-circle">
          <img
            src="https://via.placeholder.com/120x120?text=Image+2" // Reemplaza con la URL de tu imagen
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-name">Kelvin Solano</div>
        <div className="profile-phone">+1234567890</div>
        <div className="profile-email">kelvin@example.com</div>
      </div>
    </div>
  );
}

export default Pricing;
