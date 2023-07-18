import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../css/Nav.module.css';

function Nav(props) {
  const navigate = useNavigate();

  return (
    <div className={style.conteinernav}>
      <div className={style.logo}>
        <img
          className={style.img}
          src={require('../img/logo.png')}
          alt="Logo"
          onClick={() => navigate("/MenuPrincipal")} // Reemplaza "./MenuPrincipal" por "/MenuPrincipal"
        />
      </div>
      <div className={style.texto}>{props.name}</div>
    </div>
  );
}

export default Nav;
