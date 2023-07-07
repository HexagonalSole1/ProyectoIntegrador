import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';

function BotonBuscador() {
  return (
    <div>
      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="3">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="4">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default BotonBuscador;
