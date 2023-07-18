import React from "react";
import style from "../css/Obraname.module.css";
export default function Obraname(props){
    return(
        <div className={style.obracount}>
        <h4 className={style.nameObra}>{props.name}</h4>
        </div>
    )
}