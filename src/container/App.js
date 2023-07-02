import React from 'react';
import Login from '../pages/Login'
import MenuPrincipal from '../pages/MenuPrincipal';
import Ramo33 from '../pages/Menu_Ramo_33'
import PIM from '../pages/PIM1'
import FAFM from '../pages/FAFM'
import FISM from '../pages/FISM'
import Descargar from '../pages/Descargar';
import CrearObra from '../pages/CrearObra';


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='contenedor'>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/MenuPrincipal' element={<MenuPrincipal />} />
      <Route path='/Ramo_33' element={<Ramo33/>} />
      <Route path='/PIM' element={<PIM/>} />
      <Route path='/FAFM' element={<FAFM/>} />
      <Route path='/FISM' element={<FISM/>} />
      <Route path='/DESCARGAR' element={<Descargar/>} />
      <Route path='/CREAROBRA' element={<CrearObra/>} />
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
