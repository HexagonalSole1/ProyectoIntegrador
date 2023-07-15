import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav(props) {
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
      <div className="texto">{props.name}</div>
    </div>
  );
}

export default Nav;
