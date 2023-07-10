import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CrearObraForm from '../components/CrearobraForm';
export default function CrearObra() {
  return (
    <div>
    <Nav/>
    <CrearObraForm/>
    <Footer name='Crear Obra'/>
    </div>
  )
}
