import React from 'react'
import Nav from '../components/Nav';
import Contenido from '../components/FormLogin';
import style from "../css/PageLogin.css"


export default function Login() {
  return (
    <div>
      <Nav 
    name='H. Ayuntamiento Municipal de Mapastepec, Chiapas'/>
    <Contenido/>
    </div>
  )
}
