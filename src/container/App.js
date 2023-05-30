import React from 'react';
import Login from '../pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='contenedor'>
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login />} />

      </Routes>
    </BrowserRouter>   
     </div>
  );
}

export default App;
