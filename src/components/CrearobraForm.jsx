import React, { useEffect, useState } from "react";
import style from "../css/CrearObra.module.css";
import FILEUPLOAD from "../components/FileUpload";
import axios from "axios";
import IMG from "../img/download.png";
import swal from 'sweetalert2';
function CrearObraForm() {
  const validarInputs = () => {
    // Obtener los valores de los inputs
    const nombre = document.getElementById("nombre").value;
    const identificador = document.getElementById("identificador").value;
    const supervisor = document.getElementById("supervisor").value;
    const direccion = document.getElementById("direccion").value;
    const fondo = document.getElementById("fondo").value;
    const presupuesto = document.getElementById("presupuesto").value;
    const modalidad = document.getElementById("modalidad").value;
    const fechaInicio = document.getElementById("fechaInicio").value;
    const descripcion = document.getElementById("descripcion").value;

    // Validar que los campos no estén vacíos
    if (
      nombre.trim() === "" ||
      identificador.trim() === "" ||
      supervisor.trim() === "" ||
      direccion.trim() === "" ||
      fondo.trim() === "" ||
      presupuesto.trim() === "" ||
      modalidad.trim() === "" ||
      fechaInicio.trim() === "" ||
      descripcion.trim() === ""
    ) {
      // Mostrar un mensaje de error o realizar alguna acción cuando los campos están vacíos
      // alert("Por favor, completa todos los campos");
      swal.fire("Por favor", "completa todos los campos", "error");
    } else {
      // Realizar alguna acción cuando todos los campos están llenos
      // Por ejemplo, puedes llamar a una función para enviar los datos al servidor
      enviarDatosAlServidor();
    }
  };

  const enviarDatosAlServidor = () => {
    // Aquí puedes realizar el envío de los datos al servidor
    // utilizando axios u otras herramientas
  };

  return (
    <div className={style.DivForm}>
      <div className={style.DivFormIzquierda}>
        <h2 className={style.subtitle}>Datos Generales</h2>
        <div className={style.inputscontainer}>
          <div className={style.DivFormInputIzquierda}>
            <input type="text" className={style.inputforms} placeholder="Nombre de la obra" id="nombre" />
            <input type="text" className={style.inputforms} placeholder="Identificador de obra" id="identificador" />
            <input type="text" className={style.inputforms} placeholder="Supervisor de obra" id="supervisor" />
            <input type="text" className={style.inputforms} placeholder="Direccion de obra" id="direccion" />
          </div>

          <div className={style.DivFormInputDerecha}>
            <input type="text" className={style.inputforms} placeholder="Fondo proveniente" id="fondo" />
            <input type="text" className={style.inputforms} placeholder="Presupuesto" id="presupuesto" />
            <input type="text" className={style.inputforms} placeholder="Tipo de modalidad" id="modalidad" />
            <input type="text" className={style.inputforms} placeholder="Fecha de inicio" id="fechaInicio" />
          </div>
        </div>
      </div>

      <div className={style.DivFormDerecha}>
        <div className={style.DivDescripcion}>
          <h2 className={style.subtitle2}>Descripción</h2>
          <center>
            <input type="text" className={style.inputforms} id="descripcion" />
          </center>
        </div>
        <div className={style.DivUpload}>
          <FILEUPLOAD />
        </div>

        <div className={style.conteinerButtonimg}>
          <img src={IMG} className={style.img} alt="" onClick={validarInputs} />
        </div>
      </div>
      <br />
    </div>
  );
}

export default CrearObraForm;
