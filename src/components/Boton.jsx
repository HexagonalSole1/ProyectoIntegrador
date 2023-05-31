import React from 'react';
import Style from "../css/Boton.module.css";

function Boton(props) {
  return (
    <button className={Style.Boton}>
      <img src={props.imagen} alt="Texto alternativo de la imagen" className={Style.imagen}/>
      {props.titulo}
    </button>
  );
}

export default Boton;
