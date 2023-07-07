import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';
import 'react-vis/dist/style.css';
import Swal from 'sweetalert2';

const Grafica = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Función para realizar la solicitud a la API y obtener los datos
    const fetchData = async () => {
      try {
        const responseFemale = await axios.get('http://localhost:3003/personal?personal=F');
        const responseMale = await axios.get('http://localhost:3003/personal?personal=M');
        
        const femaleCount = responseFemale.data[0]?.count || 0;
        const maleCount = responseMale.data[0]?.count || 0;
        const totalCount = femaleCount + maleCount;
        
        const femaleData = [{ x: 'Femenino', y: femaleCount }];
        const maleData = [{ x: 'Masculino', y: maleCount }];
        const totalData = [{ x: 'Total', y: totalCount }];
        
        setData([...femaleData, ...maleData, ...totalData]);
        

        // Mostrar una alerta de éxito al obtener los datos
        Swal.fire({
          title: 'Datos obtenidos',
          text: 'Los datos se han obtenido correctamente',
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
        });
      } catch (error) {
        // Mostrar una alerta de error si ocurre un problema al obtener los datos
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al obtener los datos',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        console.log('Error al obtener los datos de la API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Gráfico de barras</h2>
      <XYPlot height={400} width={800} xType="ordinal">
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={data} />
      </XYPlot>
    </div>
  );
};

export default Grafica;
