import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Style from "../css/FormLogin.module.css";
import Button from 'react-bootstrap/Button';

import { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';




function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los campos
    if (!isEmail(email)) {
      setShowErrorAlert(true);
      return;
    }

    if (password.length < 6) {
      setShowErrorAlert(true);
      return;
    }

    if (password !== 'qwerty') {
      setShowErrorAlert(true);
      return;
    }

    // Si los campos son válidos, mostrar mensaje de éxito y redirigir a otra página
    setShowSuccessAlert(true);
    navigate('/pagina-Menu');
  };

  return (
    

      <form onSubmit={handleSubmit}>
        <div className={Style.contenedorContenido}>

        <div className={Style.DivTitulo}>
        <h1 className={Style.titulo}>Iniciar Sesión</h1>

        </div>

        <div className={Style.DivUser}>
        <p>Usuario</p>
        <input type="text"
          placeholder="Ingresa tu Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={Style.Input} />

        </div>
       
        <div className={Style.DivPassword}> 
        <p>Password</p>
        <input type="password" placeholder="Ingresa tu Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={Style.Input} />


        </div>


    

        <button className={Style.button}>Iniciar Sesion</button>

        </div>
      </form>
  

  );
}

export default LoginForm;
