import React from 'react';

function Nav() {
  return (
    <div className='conteiner-nav'>
        <div className="logo">
          <img
            className="img"
            src={require('../img/logo.png')}
            alt="Logo"
          />
        </div>
        <div className="texto">H. Ayuntamiento Municipal de Mapastepec</div>
      </div>
  );
}

export default Nav;







  