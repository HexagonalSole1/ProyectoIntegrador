import React from 'react';
<<<<<<< HEAD
import Login from '../pages/Login'
import MenuPrincipal from '../pages/MenuPrincipal';
import Ramo33 from '../pages/Menu_Ramo_33'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
=======
import Login from '../container/Login'
>>>>>>> bfb72f883fc26281e757b27d0c80ff138b10bd67
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='contenedor'>
<<<<<<< HEAD
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/MenuPrincipal' element={<MenuPrincipal />} />
      <Route path='/Ramo_33' element={<Ramo33/>} />
      </Routes>
    </BrowserRouter> 
=======
      <Login />
>>>>>>> bfb72f883fc26281e757b27d0c80ff138b10bd67
    </div>
  );
}

export default App;
