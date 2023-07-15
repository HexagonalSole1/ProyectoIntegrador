import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
    <div className='conteiner-nav'>
      <div className="logo">
        <img
          className="img"
          src={require('../img/logo.png')}
          alt="Logo"
          onClick={() => navigate("/MenuPrincipal")} // Reemplaza "./MenuPrincipal" por "/MenuPrincipal"
        />
      </div>
      <div className="texto">H. Ayuntamiento Municipal de Mapastepec, Chiapas</div>
    </div>
  );
}

export default Nav;
