import React from 'react';
import style from '../css/Footer.css'
function Footer(props) {
    return (
      <div className='contenedorFooter'>
          <div className="contenido">
            <img
              className="home"
              src={require('../img/home.png')}
              alt="homeIcon"
              onClick={""}
            />
            <h3>{props.name}</h3>
            <img
              className="logout"
              src={require('../img/logout.png')}
              alt="Logout Icon"
              onClick={""}
            />
          </div>
        </div>
    );
  }
  
  export default Footer;