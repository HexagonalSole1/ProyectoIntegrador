import React from "react";
import img1 from "../img/CrearObra2.png";
import img2 from "../img/ramo28.jpeg";
import img3 from "../img/ramo33.jpeg";
import style from "../css/MenuPrincipal.module.css";
import Boton from "./Boton";

 function MenuPrincipal() {
  return (
    <div className={style.ContenedorPrincipal}>
        <div className={style.DivArriva}>
          <Boton/>

        </div>

        <div className={style.DivAbajo}>

          <div className={style.DivAbajo1}>
          <Boton/>


          </div>
          <div className={style.DivAbajo1}>
          <Boton/>
          </div>
        </div>
        
    
    </div>
  );
}
export default MenuPrincipal;
