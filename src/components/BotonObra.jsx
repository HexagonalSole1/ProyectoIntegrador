import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import style from "../css/botonobra.module.css";
import question from "../img/pregunta.png";
import setting from "../img/ajuste.png";
import VISUALIZAR from '../components/Visualizar';
import MODIFICAR from '../components/Modificar'
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.content}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function BotonObra(props) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [modal1Show, setModal1Show] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div>
      <div className={style.contenedorbutton}>
        <div className={style.cont}>
          <img className={style.imagen5} src={question} alt="" onClick={() => setModal1Show(true)} />
        </div>
        <div className={style.conte}>
          <img className={style.imagen5} src={setting} alt="" onClick={() => setModal2Show(true)} />
        </div>
      </div>

      {showOffcanvas && (
        <Offcanvas
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
          placement='bottom'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Visualizar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <VISUALIZAR />
          </Offcanvas.Body>
        </Offcanvas>
      )}

      <MyVerticallyCenteredModal
        show={modal1Show}
        onHide={() => setModal1Show(false)}
        title="Visualizar"
        content={<VISUALIZAR />}
      />

      <MyVerticallyCenteredModal
        show={modal2Show}
        onHide={() => setModal2Show(false)}
        title="Modificar"
        content={<MODIFICAR />}
      />
    </div>
  );
}
