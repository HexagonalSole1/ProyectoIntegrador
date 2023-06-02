import React from 'react';
<<<<<<< HEAD
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
=======
function Footer() {
    return (
      <div className=''>
          <div className="">
            <img
              className=""
              src={require('../img/home.png')}
              alt="Logo"
>>>>>>> bfb72f883fc26281e757b27d0c80ff138b10bd67
            />
          </div>
        </div>
    );
  }
  
  export default Footer;