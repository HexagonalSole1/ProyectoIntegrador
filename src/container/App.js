import React from 'react';
import Nav from './../components/Nav';
import Contenido from '../components/Contenido';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='contenedor'>
      <Nav />
      <Contenido/>
    </div>
  );
}

export default App;
