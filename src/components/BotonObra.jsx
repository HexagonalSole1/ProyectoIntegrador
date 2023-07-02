import React from 'react'
import style from "../css/botonobra.module.css";
import imagen5 from "../img/pregunta.png";
import imagen6 from "../img/ajuste.png";
import question from "../img/pregunta.png";
import setting from "../img/ajuste.png";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function BotonObra(props) {
    const navigate = useNavigate();
  return (
    <div>
        <div className={style.contenedorbutton}>
            <div className={style.cont}>
              <img className={style.imagen5} src={question} alt="" onClick={() => navigate("/CrearObra")} />
            </div>
            <div className={style.conte}>
              <img className={style.imagen5} src={setting} alt="" onClick={() => navigate("/CrearObra")}/>
            </div>
          </div>
    </div>
  )
}
