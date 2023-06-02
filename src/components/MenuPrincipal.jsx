import React from "react";
<<<<<<< HEAD
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
{/*     <Boton direccion={'../img/CrearObra2.png'} onClick={() => navigate("/CrearObra")} /> */}
    <Boton 
          imagen={img1}
          titulo="Crear Obra"
          onClick={() => navigate("/CrearObra")}
          />
  </div>
  <div className={style.DivAbajo}>
    <div className={style.DivAbajo1}>
      {/* {<Boton direccion={'../img/ramo28.jpeg'} onClick={() => navigate("/Ramo_28")} />} */}
      <Boton 
          imagen={img2}
          titulo=""
          onClick={() => navigate("/Ramo_28")}
          />
    </div>
    <div className={style.DivAbajo1}>
{/*       <Boton direccion={'../img/ramo33.jpeg'} onClick={() => navigate("/Ramo_33")} /> */}   
<Boton 
          imagen={img3}
          titulo=""
          onClick={() => navigate("/Ramo_33")}
          />
 </div>
  </div>
</div>



/*     // <div className={style.ContenedorPrincipal}>
      <div className={style.contenido1}>
        <p className={style.texto2}>Crear Obra</p>
        <div className={style.divarriba}>
          <div className={style.img1}>
            <img src={img1} alt="" onClick={() => navigate("/CrearObra")} />
          </div>
        </div>
        <div className={style.divabajo}>
          <div className={style.img2}>
            <img src={img2} alt="" onClick={() => navigate("/Ramo_28")} />
          </div>
          <div className={style.img3}>
            <img src={img3} alt="" onClick={() => navigate("/Ramo_33")} />
          </div>
        </div>
      </div>
    </div> */


  );
}

=======
import img1 from "../img/CrearObra2.png";
import img2 from "../img/ramo28.jpeg";
import img3 from "../img/ramo33.jpeg";
import style from "../css/MenuPrincipal.css";

export default function MenuPrincipal() {
  return (
    <div className="ContenedorPrincipal">
      <div className="contenido1">
        <div className="divarriba">
        <div className="img1">
          <img src={img1} alt="" />
        </div>
        </div>
        <div className="divabajo">
        <div className="img2">
          <img src={img2} alt="" />
        </div>
        <div className="img3">
          <img src={img3} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> bfb72f883fc26281e757b27d0c80ff138b10bd67
