import React from 'react';
import Login from '../pages/Login';
import MenuPrincipal from '../pages/MenuPrincipal';
import CrearObra from '../pages/CrearObra';
import GenerarReporte from '../pages/GenerarReporte';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='contenedor'>
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      
      <Route path='/MenuPrincipal' element={<MenuPrincipal />} />
      <Route path='/MenuPrincipal' element={<MenuPrincipal />} />
      <Route path='/CrearObra' element={<CrearObra />} />
      <Route path='/GenerarReporte' element={<GenerarReporte />} />



      </Routes>
    </BrowserRouter>   
     </div>
  );
}

export default App;
