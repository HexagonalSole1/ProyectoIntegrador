import React, { useEffect, useState } from "react";
import style from "../css/CrearObra.module.css";
import FILEUPLOAD from "../components/FileUpload";
import axios from 'axios';

function CrearObraForm() {
  

  return (
    <div className={style.DivForm}>
      <div className={style.DivFormIzquierda}>
        <h2 className={style.subtitle}>Datos Generales</h2>
        <div className={style.inputscontainer}>
          <div className={style.DivFormInputIzquierda}>
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
          </div>

          <div className={style.DivFormInputDerecha}>
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
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
      </div>
    </div>
  );
}

export default CrearObraForm;
