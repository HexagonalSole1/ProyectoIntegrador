import React from 'react'
import Style from "../css/Boton.module.css";

function Boton(promt) {
  return (
<button className={Style.Boton}>{promt.Titulo}</button>  )
}

export default Boton