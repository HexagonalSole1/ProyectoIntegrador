import React, { useState } from "react";
import style from "../css/PIM.module.css";
import imagen1 from "../img/rectangle_6.png";
import imagen2 from "../img/rectangle_9.png";
import imagen3 from "../img/rectangle_9.png";
import imagen4 from "../img/rectangle_11.png";
import BUSCADOR from '../components/Buscador';
import BOTONBUSCADOR from '../components/BotonBuscador';

function PIM() {
  const [mostrarBuscador, setMostrarBuscador] = useState(false);

  const handleOpcionSeleccionada = () => {
    setMostrarBuscador(true);
  };

  return (
    <div className={style.Contenedor}>
    {!mostrarBuscador ? (
        <BUSCADOR onClose={() => setMostrarBuscador(false)} />
      ) : (
        <BOTONBUSCADOR isSelect={handleOpcionSeleccionada} />
      )}

      <div className={style.Contenedor2}>
        <div className={style.Contenido1}>
          <div className={style.imagen}>
            <img className={style.imagencontenida} src={imagen1} alt="" />
          </div>
         
        </div>
        <div className={style.Contenido2}>
          <div className={style.imagen}>
            <img className={style.imagencontenida} src={imagen2} alt="" />
          </div>
         
        </div>
        <div className={style.Contenido3}>
          <div className={style.imagen}>
            <img src={imagen3} alt="" />
          </div>
         
        </div>
        <div className={style.Contenido4}>
          <div className={style.imagen}>
            <img src={imagen4} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default PIM;
