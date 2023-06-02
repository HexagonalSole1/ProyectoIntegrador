import React from 'react'
import style from "../css/Boton.module.css";

function Boton(props) {
  return (
   /*  <button className={style.Boton} style={{ backgroundImage: direccion }} >
      {props.Titulo}
    </button> */
    <button className={style.Boton} onClick={props.onClick}>
    <img src={props.imagen} alt="Texto alternativo de la imagen" className={style.imagen}/>
 
  </button>
  );
}


export default Boton;