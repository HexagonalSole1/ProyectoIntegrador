import React from "react";
import style from "../css/PIM.module.css";
import imagen1 from "../img/rectangle_6.png";
import imagen2 from "../img/rectangle_9.png";
import imagen3 from "../img/rectangle_9.png";
import imagen4 from "../img/rectangle_11.png";
import BOTONOBRA from '../components/BotonObra';
import BOTONBUSCADOR from "../components/BotonBuscador";
import BUSCADOR from '../components/Buscador';
import OBRA from '../components/obra'


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
      <OBRA img={imagen1}/>
      <OBRA img={imagen2}/>
      <OBRA img={imagen3}/>
      <OBRA img={imagen4}/>
      <OBRA img={imagen4}/>
      <OBRA img={imagen1}/>
      <OBRA img={imagen2} />
      <OBRA img={imagen2} />
      <OBRA img={imagen1}/>
      <OBRA img={imagen2}/>
      <OBRA img={imagen3}/>
      <OBRA img={imagen4}/>
      <OBRA img={imagen4}/>
      <OBRA img={imagen1}/>
      <OBRA img={imagen2} />
      <OBRA img={imagen2} />
      </div>
      
    </div>
  );
}
export default PIM;
