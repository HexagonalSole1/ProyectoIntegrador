import React from 'react'
import Nav from '../components/Nav';
import DESCARGAR from '../components/Descargarpdf';
import Footer from '../components/Footer';
import style from '../css/Descargar.module.css'
export default function Descargar() {
    return (
      <div>
        <Nav />
        <div className={style.content}>
          <DESCARGAR />
        </div>
        <Footer name="PDF" className={style.footer} />
      </div>
    );
  }
  