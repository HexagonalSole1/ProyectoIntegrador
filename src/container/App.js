import React from 'react';
import Login from '../pages/Login';
import MenuPrincipal from '../pages/MenuPrincipal';
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


      </Routes>
    </BrowserRouter>   
     </div>
  );
}

export default App;
