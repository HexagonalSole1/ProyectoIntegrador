import React from "react";
import img1 from "../img/CrearObra.png";
import img2 from "../img/ramo28.jpeg";
import img3 from "../img/ramo33.jpeg";
import Boton from "./Boton";
import { useNavigate } from 'react-router-dom';
import style from "../css/MenuPrincipal.module.css";

export default function MenuPrincipal() {
  const navigate = useNavigate();
  return (
<div className={style.ContenedorPrincipal}>
  <div className={style.DivArriva}>
    <Boton 
          imagen={img1}
          titulo="Crear Obra"
          onClick={() => navigate("/CrearObra")}
          />
  </div>
  <div className={style.DivAbajo}>
    <div className={style.DivAbajo1}>
      <Boton 
          imagen={img2}
          titulo=""
          onClick={() => navigate("/PIM")}
          />
    </div>
    <div className={style.DivAbajo1}>
      <Boton 
          imagen={img3}
          titulo=""
          onClick={() => navigate("/Ramo_33")}
          />
 </div>
  </div>
</div>
  );
}

