import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Style from "../css/FormLogin.module.css";
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert2'
import { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import axios from "axios";


const todoslosusuarios = async (state) => {
  const peticion = await axios.get("http://localhost:8080/api/usuario");
 state(peticion.data.results);

}




function LoginForm() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  function handleCorreoChange(event) {
    setCorreo(event.target.value);
  }

  function handleContrasenaChange(event) {
    setContrasena(event.target.value);
  }


  function handleLogin(e) {
    e.preventDefault(); // Evita que el formulario se envíe y la página se recargue


    const data = {
      "correoUser": correo,
      "passwordUsuario":contrasena
    };
  
    axios.post('http://localhost:8080/api/validacion/login', data)
        .then(response => {
          // Manejar la respuesta de la API
          if (response.data === true) {
            setIsAuthenticated(true);
            // Las credenciales son válidas
            swal.fire({
              icon:"success",
              title:"Exito",
              text:"Ingresando Como Admin",
              showConfirmButton:false,
              timer:2000
            }).then((result) => { navigate('./MenuPrincipal'); });

          

          } else {
            // Las credenciales son inválidas
            setCorreo('');
            setContrasena('');
            swal.fire("Credenciales Incorrectas", "Vuelve a intentarlo", "error");
          
          }
        })
        .catch(error => {
          // Manejar errores de la solicitud
          console.error('Error:', error);
        });


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
