import React from "react";
import style from "../css/PIM.module.css";
import imagen1 from "../img/rectangle_6.png";
import imagen2 from "../img/rectangle_9.png";
import imagen3 from "../img/rectangle_9.png";
import imagen4 from "../img/rectangle_11.png";
import BOTONOBRA from '../components/BotonObra';
import BOTONBUSCADOR from "../components/BotonBuscador";
import BUSCADOR from '../components/Buscador';


function PIM(props) {
  return (
 
    <div className={style.Contenedor}>
      <div className={style.divbuscador}>
        <div className={style.botonbuscador}>
        <BOTONBUSCADOR/>
        </div>
        <div className={style.buscador}>
      <BUSCADOR/>
      </div>
      </div>
      <div className={style.Contenedor2}>
        <div className={style.Contenido1}>
          <div className={style.imagen}>
            <img className={style.imagencontenida} src={imagen1} alt="" />
          </div>
          <BOTONOBRA/>
        </div>
        <div className={style.Contenido2}>
          <div className={style.imagen}>
            <img className={style.imagencontenida} src={imagen2} alt="" />
          </div>
          <BOTONOBRA/>
        </div>
        <div className={style.Contenido3}>
          <div className={style.imagen}>
            <img src={imagen3} alt="" />
          </div>
          <BOTONOBRA/>
        </div>
        <div className={style.Contenido4}>
          <div className={style.imagen}>
            <img src={imagen4} alt="" />
          </div>
          <BOTONOBRA/>
        </div>
      </div>
      
    </div>
  );
}
export default PIM;
