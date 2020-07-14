var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var port = "5000";

var con = mysql.createConnection({
    host: "raspy",
    user: "root",
    password: "peperina",
    database: "universidad"
});

var app = express();

app.use(bodyParser.json());

/**
 * GET /estudiante/x/notas
 */
app.get('/estudiante/:id_estudiante/notas', (request, response) => {
    var q = 'SELECT e.nombre, e.apellido, n.nota, n.tipo_nota, m.nombre AS materia FROM notas n JOIN materias m ON m.id_materia = n.id_materia JOIN estudiantes e ON e.id_estudiante = n.id_estudiante WHERE n.id_estudiante = ?'
    con.query(q, [request.params.id_estudiante], (err, result) => {
        if (err) throw err;
        console.log(result);
        response.send(result);
    });
});

/**
 * GET /materia/x/notas
 */
app.get('/materia/:id_materia/notas', (request, response) => {
    var q = 'SELECT m.nombre AS materia, n.nota, n.tipo_nota, e.nombre, e.apellido FROM materias m JOIN estudiantes e JOIN notas n ON n.id_estudiante = e.id_estudiante WHERE m.id_materia = ?' 
    con.query(q, [request.params.id_materia], (err, result) => {
        if (err) throw err;
        console.log(result);
        response.send(result);
    });
});

/**
 * Añadido de materias
 */
app.post('/materia', (req, res) => {
    var q = 'INSERT INTO materias (nombre) VALUES (?)';
    con.query(q, [req.body.nombre], (err, result, fields) => {
        if (err) {
            var msg = 'No se pudo crear el registro solicitado. Intente más tarde.';
            console.log(msg + " /// " + err.message);
            res.send(msg);
        }
        else {
            var msg = 'Se creó la materia "' + req.body.nombre + '" correctamente. Con ID: ' + result.insertId
            console.log(msg + " /// " + fields);
            res.send(msg);
        }
    });
});

app.delete('/materia', (req, res) => {
    var q = 'DELETE FROM universidad.materias WHERE nombre = ?';
    con.query(q, [req.body.nombre], (err, result, fields) => {
        if (err) {
            var msg = 'No se pudo borrar el registro solicitado. Intente más tarde.';
            console.log(msg + " /// " + err.message);
            res.send(msg); 
        } else {
            var msg = 'Se borró la materia "' + req.body.nombre + '" correctamente.'
            console.log(msg + " /// " + fields);
            res.send(msg);
        }
    });
});

con.connect((err) => {
    if (err) throw err;
    /*con.query("SELECT * FROM estudiantes", function (err, result){
        if (err) throw err;
        console.log(result);
    }) */
});

app.listen(port, function() {
    console.log('App escuchando en http://localhost:' + port);
});