import React from "react";
import style from "../css/PIM.module.css";
import imagen1 from "../img/rectangle_6.png";
import imagen2 from "../img/rectangle_9.png";
import imagen3 from "../img/rectangle_9.png";
import imagen4 from "../img/rectangle_11.png";
import BOTONOBRA from '../components/BotonObra'

function PIM() {
  return (
    // <div className={style.contenedor}>
    //         <div className={style.Contenedor2}>
    //             <div className={style.Contenido1}>
    //                 <div className={style.imagen1}>
    //                     <img src={imagen1} alt="" />
    //                 </div>
    //                 <div className={style.cont}>
    //                     <img className={style.imagen5} src={imagen5} alt="" />
    //                 </div>
    //                 <div className={style.conte}>
    //                     <img className={style.imagen6} src={imagen6} alt="" />
    //                 </div>
    //             </div>
    //             <div className={style.Contenido2}>
    //                 <div className={style.imagen2}>
    //                     <img src={imagen2} alt="" />
    //                 </div>
    //                 <div className={style.cont2}>
    //                     <img className={style.imagen5} src={imagen5} alt="" />
    //                 </div>
    //                 <div className={style.conte2}>
    //                     <img className={style.imagen6} src={imagen6} alt="" />
    //                 </div>
    //             </div>
    //             <div className={style.Contenido3}>
    //                 <div className={style.imagen3}>
    //                     <img src={imagen3} alt="" />
    //                 </div>
    //                 <div className={style.cont3}>
    //                     <img className={style.imagen5} src={imagen5} alt="" />
    //                 </div>
    //                 <div className={style.conte3}>
    //                     <img className={style.imagen6} src={imagen6} alt="" />
    //                 </div>
    //             </div>
    //             <div className={style.Contenido4}>
    //                 <div className={style.imagen4}>
    //                     <img src={imagen4} alt="" />
    //                 </div>
    //                 <div className={style.cont4}>
    //                     <img className={style.imagen5} src={imagen5} alt="" />
    //                 </div>
    //                 <div className={style.conte4}>
    //                     <img className={style.imagen6} src={imagen6} alt="" />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    <div className={style.Contenedor}>
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
