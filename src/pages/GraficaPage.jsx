import React from 'react'
import Nav from '../components/Nav';
import Grafica from '../components/grafica';
import Footer from '../components/Footer';
import style from '../css/Descargar.module.css'
export default function Descargar() {
    return (
      <div>
          <Nav 
    name='H. Ayuntamiento Municipal de Mapastepec, Chiapas'/>
        <div className={style.content}>
          <Grafica/>
        </div>
        <Footer name="PDF" className={style.footer} />
      </div>
    );
  }