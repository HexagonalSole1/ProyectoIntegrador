import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Style from "../css/FormLogin.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { isEmail } from 'validator';
import Alert from 'react-bootstrap/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './MenuPrincipal';

function Contenido() {
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
    navigate('/MenuPrincipal');
  };

  return (
    <div className={Style.contenedorContenido}>
      <div className={Style.contenedorCuadro}>
        <div className={Style.contenido}>
          {showSuccessAlert && (
            <Alert variant="success" className={Style.alerta} onClose={() => setShowSuccessAlert(false)} dismissible>
              Contraseña correcta. ¡Inicio de sesión exitoso!
            </Alert>
          )}

          {showErrorAlert && (
            <Alert variant="danger" className={Style.alerta} onClose={() => setShowErrorAlert(false)} dismissible>
              {isEmail(email)
                ? password.length < 6
                  ? 'La contraseña debe tener al menos 6 caracteres'
                  : 'Contraseña incorrecta'
                : 'Ingrese un correo electrónico válido'}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingrese su usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={Style.usuario}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={Style.password}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className={Style.button}>
              Entrar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
