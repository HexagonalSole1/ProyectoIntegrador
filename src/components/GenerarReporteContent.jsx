import Style from '../css/GenerarReporteContent.module.css';
import React, { useEffect, useState } from 'react';
import { todoslosusuarios } from '../functions/FuncionReporte';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function GenerarReporteContent() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    todoslosusuarios(setUsers);
  }, []);

  const generatePDF = (data) => {
    if (data) {
      const docDefinition = {
        content: [
          {
            text: "Usuarios",
            style: "header",
          },
          {

            

            table: {
              body: [
                ["idUsuario", "nombreUsuario", "correoUser", "numeroContacto", "Puesto", "idMunicipio"],
                ...data.map((user) => [user.idUsuario, user.nombreUsuario, user.correoUser, user.numeroContacto, user.puestoUsuario, user.idMunicipio]),
              ],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            marginBottom: 10,
          },
        },
         pageOrientation: "landscape", // Cambiar a "portrait" para orientación vertical
      };

      pdfMake.createPdf(docDefinition).open();
    }
  };

  return (
    <>
      <div className={Style.divReport}>
        <button className={Style.buttonReport} onClick={() => generatePDF(users)}>Descargar</button>
      </div>
    </>
  );
}

export default GenerarReporteContent;
