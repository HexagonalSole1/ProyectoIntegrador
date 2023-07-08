import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import style from '../css/botonBuscador.module.css'

function BotonBuscador() {
  return (
    <div>
      <DropdownButton
        as={ButtonGroup}
        title="Tipo de búsqueda"
        id="bg-vertical-dropdown-3"
        variant="secondary" // Agregamos la variante "secondary"
        data-bs-theme="dark"
        className={style.boton}
      >
        <Dropdown.Item eventKey="1">Id_Obra</Dropdown.Item>
        <Dropdown.Item eventKey="2">Id_Usuario</Dropdown.Item>
        <Dropdown.Item eventKey="3">Contratista</Dropdown.Item>
        <Dropdown.Item eventKey="4">Ramo</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default BotonBuscador;
