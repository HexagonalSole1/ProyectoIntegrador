import React from "react";
import img1 from "../img/CrearObra2.png";
import img2 from "../img/ramo28.jpeg";
import img3 from "../img/ramo33.jpeg";
import style from "../css/MenuPrincipal.css";

export default function MenuPrincipal() {
  return (
    <div className="ContenedorPrincipal">
      <div className="contenido1">
        <div className="img1">
          <img src={img1} alt="" />
        </div>
        <div className="img2">
          <img src={img2} alt="" />
        </div>
        <div className="img3">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
