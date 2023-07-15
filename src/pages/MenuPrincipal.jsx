import React from 'react'
import Nav from '../components/Nav'
import Contenido2 from '../components/MenuPrincipal'
import Footer from '../components/Footer'

export default function MenuPrincipal() {
  return (
    <div>
     <Nav 
    name='H. Ayuntamiento Municipal de Mapastepec, Chiapas'/>
    <Contenido2/>
    <Footer
    name="Menu"/>
    </div>
  )
}
