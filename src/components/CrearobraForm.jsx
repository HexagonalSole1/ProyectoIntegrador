import React, { useEffect, useState } from "react";
import style from "../css/CrearObra.module.css";
import FILEUPLOAD from "../components/FileUpload";
import axios from "axios";
import IMG from "../img/download.png";

function CrearObraForm() {
  return (
    <div className={style.DivForm}>
      <div className={style.DivFormIzquierda}>
        <h2 className={style.subtitle}>Datos Generales</h2>
        <div className={style.inputscontainer}>
          <div className={style.DivFormInputIzquierda}>
            <input type="text" className={style.inputforms} placeholder="Nombre de la obra"/>
            <input type="text" className={style.inputforms} placeholder="Identificador de obra" />
            <input type="text" className={style.inputforms} placeholder="Supervisor de obra"/>
            <input type="text" className={style.inputforms} placeholder="Direccion de obra"/>
          </div>

          <div className={style.DivFormInputDerecha}>
            <input type="text" className={style.inputforms} placeholder="Fondo proveniente"/>
            <input type="text" className={style.inputforms} placeholder="Presupuesto"/>
            <input type="text" className={style.inputforms} placeholder="Tipo de modalidad" />
            <input type="text" className={style.inputforms} placeholder="Fecha de inicio"/>
          </div>
        </div>
      </div>

      <div className={style.DivFormDerecha}>
        <div className={style.DivDescripcion}>
          <h2 className={style.subtitle2}>Descripción</h2>
          <center>
            <input type="text" className={style.inputforms} />
          </center>
        </div>
        <div className={style.DivUpload}>
          <FILEUPLOAD />
        </div>
        
        <div className={style.conteinerButtonimg}>
          <img src={IMG} className={style.img} alt="" />
        </div>
      </div>
      <br />
    </div>
  );
}

export default CrearObraForm;
