const express = require("express");
const mysql = require("mysql");
const app = express();

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "adri1904",
    database: "BD1",
});

// Conéctate a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Conectado a la base de datos MySQL");
});

app.post("/", (req, res) => {
    // Obtén los datos del formulario de inicio de sesión desde req.body
    const { username, password } = req.body;

    // Realiza la consulta en la base de datos para verificar las credenciales
    const query = `SELECT * FROM usuarios WHERE username = ? AND password = ?`;
    db.query(query, [username, password], (err, results) => {
        if (err) {
            throw err;
        }

        if (results.length > 0) {
            // Usuario válido, envía una respuesta exitosa
            res.status(200).json({ message: "Inicio de sesión exitoso" });
        } else {
            // Credenciales inválidas, envía una respuesta de error
            res.status(401).json({ message: "Credenciales inválidas" });
        }
    });
});
