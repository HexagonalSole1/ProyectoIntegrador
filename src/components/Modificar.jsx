import React, { useEffect } from "react";
import style from "../css/Modificar.module.css";
import Actualizar from "./BotonActualizar";
import IMGActualizar from "../img/actualizar.png";
import FileUploader from "../components/FileUpload";
import swal from 'sweetalert2';

export default function Modificar(props) {
  useEffect(() => {
    const validarInputs = () => {
      const nombreObra = document.getElementById("nombreObra");
      const identificadorObra = document.getElementById("identificadorObra");
      const supervisorObra = document.getElementById("supervisorObra");
      const direccionObra = document.getElementById("direccionObra");
      const fondoProveniente = document.getElementById("fondoProveniente");
      const presupuesto = document.getElementById("presupuesto");
      const modalidad = document.getElementById("modalidad");
      const fechaInicio = document.getElementById("fechaInicio");
      const descripcion = document.getElementById("descripcion");

      if (
        nombreObra.value.trim() === "" ||
        identificadorObra.value.trim() === "" ||
        supervisorObra.value.trim() === "" ||
        direccionObra.value.trim() === "" ||
        fondoProveniente.value.trim() === "" ||
        presupuesto.value.trim() === "" ||
        modalidad.value.trim() === "" ||
        fechaInicio.value.trim() === "" ||
        descripcion.value.trim() === ""
      ) {
        swal.fire("Por favor", "completa todos los campos", "error");

      } else {
        // Realiza alguna acción cuando todos los campos están llenos
        // Por ejemplo, puedes llamar a una función para actualizar los datos
        actualizarDatos();
      }
    };

    const actualizarDatos = () => {
      // Aquí puedes implementar la lógica para actualizar los datos
    };

    const actualizarButton = document.getElementById("actualizarButton");
    actualizarButton.addEventListener("click", validarInputs);

    // Limpiar el evento al desmontar el componente
    return () => {
      actualizarButton.removeEventListener("click", validarInputs);
    };
  }, []);

  return (
    <div className={style.DivForm}>
      <div className={style.DivFormInputIzquierda}>
        <div className={style.DivDescripcion}>
          <h2 className={style.subtitle}>Descripción</h2>
          <div className={style.contenedorinput}>
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Nombre de la obra"
              id="nombreObra"
            />
          </div>
        </div>
        <div className={style.DivUpload}>
          <FileUploader className={style.fileupload} />
        </div>
      </div>
      <div className={style.DivFormDerecha}>
        <h2 className={style.subtitle}>Datos Generales</h2>
        <div className={style.inputscontainer}>
          <div className={style.DivFormInputDerecha}>
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Nombre de la obra"
              id="nombreObra"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Identificador de obra"
              id="identificadorObra"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Supervisor de obra"
              id="supervisorObra"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Direccion de obra"
              id="direccionObra"
            />
          </div>
          <div className={style.DivFormInputDerecha}>
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Fondo proveniente"
              id="fondoProveniente"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Presupuesto"
              id="presupuesto"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Tipo de modalidad"
              id="modalidad"
            />
            <input
              type="text"
              className={`${style.inputforms} ${style.placeholderVisible}`}
              placeholder="Fecha de inicio"
              id="fechaInicio"
            />
          </div>
        </div>
      </div>
      <div className={style.botonActualizar}>
        <img
          className={style.imagen6}
          src={IMGActualizar}
          alt=""
          id="actualizarButton"
        />
      </div>
      <h3>{props.name}</h3>
    </div>
  );
}
