import React from 'react';
import Login from '../pages/Login'
import MenuPrincipal from '../pages/MenuPrincipal';
import Ramo33 from '../pages/Menu_Ramo_33'
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
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
