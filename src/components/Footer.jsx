import React from 'react';
import style from '../css/Footer.module.css'
import DownFooter from '../components/DownFooter';
import { useNavigate } from 'react-router-dom';
function Footer(props) {
  const navigate = useNavigate();
    return (
      <div className={style.contenedorFooter}>
          <div className={style.contenido}>
            <img
              className={style.home}
              src={require('../img/home.png')}
              alt="homeIcon"
              onClick={() => navigate('/MenuPrincipal')}
            />
            <h3>{props.name}</h3>
            <img
              className={style.logout}
              src={require('../img/logout.png')}
              alt="Logout Icon"
              onClick={() => navigate('../')}
            />
          </div>
          <DownFooter />
        </div>
    );
  }
  
  export default Footer;