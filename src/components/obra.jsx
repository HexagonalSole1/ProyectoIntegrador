import React from 'react';
import BOTONOBRA from '../components/BotonObra';
import style from '../css/obra.module.css';

export default function Obra(props) {
  const imagen = props.img;

  return (
    <div>
      <div className={style.Contenido1}>
        <div className={style.imagen}>
          <img className={style.imagencontenida} src={imagen} alt="" />
        </div>
        <BOTONOBRA />
      </div>
    </div>
  );
}
