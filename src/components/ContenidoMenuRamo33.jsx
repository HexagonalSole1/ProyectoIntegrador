import React from 'react'
import style from '../css/Ramo33.module.css'
import img1 from '../img/img1_ramo33.png'
import img2 from '../img/img2_ramo33.png'
import { useNavigate } from 'react-router-dom';

export default function ContenidoMenuRamo33() {
    const navigate = useNavigate();
    return (
      <div className={style.ContenedorPrincipal}>
        <div className={style.contenido1}>
          <div className={style.divarriba}>
          <div className={style.divabajo}>
            <div className={style.img2}>
              <img src={img1} alt="" onClick={() => navigate("/Ramo_28")} />
            </div>
            <div className={style.img3}>
              <img src={img2} alt="" onClick={() => navigate("/Ramo_33")} />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
    }
