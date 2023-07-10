import React, { useEffect, useState } from "react";
import style from "../css/CrearObra.module.css";
import FILEUPLOAD from "../components/FileUpload";
import axios from 'axios';

function CrearObraForm() {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    obtenerInfo();
  }, []);

  const obtenerInfo = () => {
    axios.get('http://localhost:3003/personal')
      .then(function (response) {
        const apiData = response.data;
        setInputValue(apiData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

          <input
            type="text"
            id="inputDisabledEx2"
            className="form-control"
            disabled
            value={inputValue || ''}
          />
        </div>
        <div className={style.DivUpload}>
          <FILEUPLOAD />
        </div>
      </div>
    </div>
  );
}

export default CrearObraForm;
