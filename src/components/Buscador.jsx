import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from '../css/buscador.module.css';

export default function Buscador() {
  return (
    <div>
      <Nav>
        <Navbar expand="xxl" className="bg-body-tertiary">
          <Container fluid>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className={style.buscador}
                aria-label="Search"
              />
              <Button variant="outline-success" className={style.button}>Search</Button>
            </Form>
          </Container>
        </Navbar>
      </Nav>
    </div>
  );
}
