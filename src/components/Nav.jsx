import React from 'react';
import style from '../css/Nav.module.css';

function Nav() {
  return (
    <div className={style.conteiner_nav}>
        <div className={style.logo}>
          <img
            className={style.img}
            src={require('../img/logo.png')}
            alt="Logo"
          />
        </div>
        <div className={style.DivTexto}>H. Ayuntamiento Municipal de Mapastepec</div>
      </div>
  );
}

export default Nav;







  