import React from "react";
import Actualizar from '../img/actualizar.png'
import style from '../css/BotonActualizar.module.css'

export default function BotonActualizar() {
  return (
    <div className={style.botonActualizar}>
      <img className={style.imagen6} src={Actualizar} alt="" />
    </div>
  );
}
