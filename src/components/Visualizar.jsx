import React from "react";
import style from "../css/Visualizar.module.css";
export default function Visualizar (props) {
  return (
    <div className={style.DivForm}>
      <div className={style.DivFormInputIzquierda}>
        <div className={style.DivDescripcion}>
          <h2 className={style.subtitle}>Descripcion</h2>
          <div className={style.contenedorinput}>
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Nombre de la obra"
            />
          </div>
        </div>
        <div className={style.DivUpload}>
        <h2 className={style.subtitle}>Archivos</h2>
        </div>
      </div>
      <div className={style.DivFormDerecha}>
        <h2 className={style.subtitle}>Datos Generales</h2>
        <div className={style.inputscontainer}>
          <div className={style.DivFormInputDerecha}>
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Nombre de la obra"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Identificador de obra"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Supervisor de obra"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Direccion de obra"
            />
          </div>
          <div className={style.DivFormInputDerecha}>
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Fondo proveniente"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Presupuesto"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Tipo de modalidad"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Fecha de inicio"
            />
          </div>
        </div>
      </div>
      <h3>{props.name}</h3>
    </div>
  );
}
