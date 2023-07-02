import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Style from "../css/FormLogin.module.css";
import swal from 'sweetalert2';
import axios from 'axios';

function loginAPI(correo, contrasena, navigate) {
  axios.get(`http://localhost:3003/usuarioesp?usuario=${correo}`)
    .then(response => {
      const data = response.data;
      if (data) {
        const contraseñaUsuario = data.password_usuario;

        if (contraseñaUsuario === contrasena) {
          // Contraseña correcta, redirige al usuario al menú principal
          swal.fire({
            icon: "success",
            title: "Éxito",
            text: "Ingresando como usuario",
            showConfirmButton: false,
            timer: 2000
          }).then((result) => {
            navigate('./MenuPrincipal');
          });
          localStorage.setItem("usuario", JSON.stringify(data));
        } else {
          // Contraseña incorrecta, muestra un mensaje de error
          swal.fire("Credenciales incorrectas", "Vuelve a intentarlo", "error");
        }
      } else {
        // No se encontró al usuario, muestra un mensaje de error
        swal.fire("Usuario no encontrado", "Vuelve a intentarlo", "error");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      swal.fire("Ocurrió un error al iniciar sesión", "Inténtalo nuevamente", "error");
    });
}

function LoginForm() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  function handleCorreoChange(event) {
    setCorreo(event.target.value);
  }

  function handleContrasenaChange(event) {
    setContrasena(event.target.value);
  }

  function handleLogin(e) {
    e.preventDefault();

    var validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;
    var validarContraseña = /^[A-Z][A-Za-z0-9]{5}$/;

    if (validEmail.test(correo) || validarContraseña.test(contrasena)) {
      loginAPI(correo, contrasena, navigate);
    } else {
      swal.fire("El formato del correo o contraseña es incorrecto", "Vuelve a intentarlo", "error");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div className={Style.contenedorContenido}>
        <div className={Style.DivTitulo}>
          <h1 className={Style.titulo}>Iniciar Sesión</h1>
        </div>
        <div className={Style.DivUser}>
          <p>Usuario</p>
          <input
            type="text"
            placeholder="Ingresa tu Usuario"
            value={correo}
            onChange={handleCorreoChange}
            className={Style.Input}
          />
        </div>
        <div className={Style.DivPassword}>
          <p>Password</p>
          <input
            type="password"
            placeholder="Ingresa tu Contraseña"
            value={contrasena}
            onChange={handleContrasenaChange}
            className={Style.Input}
          />
        </div>
        <button type="submit" className={Style.button}>
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
