import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CrearObraForm from '../components/CrearobraForm';
export default function CrearObra() {
  return (
    <div>
    <Nav 
    name='H. Ayuntamiento Municipal de Mapastepec, Chiapas'/>
    <CrearObraForm/>
    <Footer name='Crear Obra'/>
    </div>
  )
}
