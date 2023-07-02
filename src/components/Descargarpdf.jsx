import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";

const generatePDF = (usuarios) => {
  const MyDocument = (
    <Document>
      <Page size="A4" orientation="landscape">
        <View>
          <Text style={styles.title}>Tabla de usuarios</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeaderCell}>ID</Text>
              <Text style={styles.tableHeaderCell}>Nombre</Text>
              <Text style={styles.tableHeaderCell}>Correo</Text>
              <Text style={styles.tableHeaderCell}>Contraseña</Text>
              <Text style={styles.tableHeaderCell}>Número</Text>
              <Text style={styles.tableHeaderCell}>Puesto</Text>
              <Text style={styles.tableHeaderCell}>ID Municipio</Text>
            </View>
            {usuarios.map((usuario) => (
              <View style={styles.tableRow} key={usuario.id_usuario}>
                <Text style={styles.tableCell}>{usuario.id_usuario}</Text>
                <Text style={styles.tableCell}>{usuario.nombre_usuario}</Text>
                <Text style={styles.tableCell}>{usuario.correo_user}</Text>
                <Text style={styles.tableCell}>{usuario.password_usuario}</Text>
                <Text style={styles.tableCell}>{usuario.numero_contacto}</Text>
                <Text style={styles.tableCell}>{usuario.puesto_usuario}</Text>
                <Text style={styles.tableCell}>{usuario.id_municipio}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink document={MyDocument} fileName="usuarios.pdf">
      {({ blob, url, loading, error }) =>
        loading ? (
          "Cargando..."
        ) : (
          <center>
            <span style={{ color: "white" }}>Descargar PDF</span>
          </center>
        )
      }
    </PDFDownloadLink>
  );
};

export default function Descargarpdf() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = () => {
    axios
      .get("http://localhost:3003/usuario")
      .then((response) => {
        setUsuarios(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Menu = () => {
    return (
      <div className={styles.menuContainer}>
        <Button>{generatePDF(usuarios)}</Button>
      </div>
    );
  };

  return (
    <div className={styles.pageContainer}>
      <Menu />
    </div>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  menuContainer: {
    textAlign: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
  },
  tableHeaderCell: {
    padding: "5px",
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "left",
    fontWeight: "bold",
  },
  tableCell: {
    padding: "5px",
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "left",
  },
});
