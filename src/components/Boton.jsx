import React from 'react';
import Style from "../css/Boton.module.css";

function Boton({imagen, titulo}) {
  return (
    <button className={Style.Boton}>
      <img src={imagen} alt="Texto alternativo de la imagen" className={Style.imagen}/>
      {titulo}
    </button>
  );
}

export default Boton;
