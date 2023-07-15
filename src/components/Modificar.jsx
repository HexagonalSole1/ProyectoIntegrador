import React from "react";
import style from "../css/Modificar.module.css";
import Actualizar from "./BotonActualizar";
import IMGActualizar from '../img/actualizar.png'
import FileUploader from "../components/FileUpload";
export default function(props){
    return(
        
        <div className={style.DivForm}>
        
        <div className={style.DivFormInputIzquierda}>
            
        <div className={style.DivDescripcion}>
        <h2 className={style.subtitle}>Descripcion</h2>
        
        </div>
        <div className={style.DivUpload}>
        <FileUploader className={style.fileupload}/>
         
        </div>
      </div>
      
      <div className={style.DivFormDerecha}>
        <h2 className={style.subtitle}>Datos Generales</h2>
        <div className={style.inputscontainer}>
        <div className={style.DivFormInputDerecha}>
        <input type="text" className={style.inputforms} placeholder="Nombre de la obra"/>
            <input type="text" className={style.inputforms} placeholder="Identificador de obra" />
            <input type="text" className={style.inputforms} placeholder="Supervisor de obra"/>
            <input type="text" className={style.inputforms} placeholder="Direccion de obra"/>
          </div>
          

          <div className={style.DivFormInputDerecha}>
          <input type="text" className={style.inputforms} placeholder="Fondo proveniente"/>
            <input type="text" className={style.inputforms} placeholder="Presupuesto"/>
            <input type="text" className={style.inputforms} placeholder="Tipo de modalidad" />
            <input type="text" className={style.inputforms} placeholder="Fecha de inicio"/>
          </div>
          
        </div>
        
      </div>
      <div className={style.botonActualizar}>
      <img className={style.imagen6} src={IMGActualizar} alt="" />
      </div>
       <h3>{props.name}</h3>
       
    </div>
    
    )
}