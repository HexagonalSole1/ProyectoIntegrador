import React from 'react';

export default function VistaWebdescarga({ usuario }) {
  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.headerCell}>ID_Usuario</th>
            <th style={styles.headerCell}>Nombre_Usuario</th>
            <th style={styles.headerCell}>Correo_Usuario</th>
            <th style={styles.headerCell}>Contraseña_Usuario</th>
            <th style={styles.headerCell}>Numero_Usuario</th>
            <th style={styles.headerCell}>Puesto_Usuario</th>
            <th style={styles.headerCell}>ID_Municipio</th>
            {/* Agrega más encabezados de columnas según sea necesario */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.cell}>{usuario ? usuario.id_usuario : ''}</td>
            <td style={styles.cell}>{usuario ? usuario.nombre_usuario : ''}</td>
            <td style={styles.cell}>{usuario ? usuario.correo_user : ''}</td>
            <td style={styles.cell}>{usuario ? usuario.password_usuario : ''}</td>
            <td style={styles.cell}>{usuario ? usuario.numero_usuario : ''}</td>
            <td style={styles.cell}>{usuario ? usuario.puesto_usuario : ''}</td>
            <td style={styles.cell}>{usuario ? usuario.id_municipio : ''}</td>
            {/* Agrega más celdas con los datos del usuario según sea necesario */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  table: {
    width: '50%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  headerCell: {
    backgroundColor: '#f2f2f2',
    borderBottom: '1px solid #ddd',
    padding: '5px',
    textAlign: 'left',
  },
  cell: {
    borderBottom: '1px solid #ddd',
    padding: '5px',
    textAlign: 'left',
  },
};
