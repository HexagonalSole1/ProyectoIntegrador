import React from "react";
import style from "../css/Modificar.module.css";
import Actualizar from "./BotonActualizar";
export default function(props){
    return(
        
        <div className={style.DivForm}>
        
        <div className={style.DivFormInputIzquierda}>
            
        <div className={style.DivDescripcion}>
        <h2 className={style.subtitle}>Subir Archivo</h2>
        </div>
        <div className={style.DivUpload}>
        <h2 className={style.subtitle}>Descripcion</h2>
         
        </div>
      </div>
      
      <div className={style.DivFormDerecha}>
        <h2 className={style.subtitle}>Datos Generales</h2>
        <div className={style.inputscontainer}>
        <div className={style.DivFormInputDerecha}>
            
            {/* <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} /> */}
          </div>
          

          <div className={style.DivFormInputDerecha}>
            {/* <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} />
            <input type="text" className={style.inputforms} /> */}
          </div>
          
        </div>
        
      </div>
      <Actualizar/>
       <h3>{props.name}</h3>
       
    </div>
    
    )
}