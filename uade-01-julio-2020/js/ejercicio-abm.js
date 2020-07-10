var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// Conectar con una Base de Datos
var con = mysql.createConnection({
  host: "104.155.161.18",
  user: "root",
  password: "uade",
  database: "alexo"
});

con.connect(function (err) {
  if (err) throw err;

  app.listen(3005, function(err) {
    if (err) throw err;

    console.log("Programa escuchando en puerto 3005");
  });
});

//////////////////////////////
///////// estudiante /////////
//////////////////////////////

// Crear Estudiante
app.post('/estudiante', function(req, res) {
  var estudiante = req.body;
  if (!estudiante.nombre || !estudiante.apellido) {
    return res.send("El nombre y apellido del usuario no puede ser vacio");
  }

  var estudianteArray = [
    estudiante.nombre,
    estudiante.apellido,
    estudiante.direccion,
    estudiante.telefono
  ];

  con.query("INSERT INTO estudiantes (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?) ", estudianteArray, function(err, result) {
    if (err) throw err;

    res.send("Se ha creado el usuario: " + result.insertId);
  });
});


// Modificar Estudiante
app.put('/estudiante/:idEstudiante', function(req, res) {
  var estudiante = req.body;
  var idEstudiante = parseInt(req.params.idEstudiante);
  if (isNaN(idEstudiante)) {
    return response.send("Debe ingresar un id de estudiante válido como parámetro.");
  }

  if (!estudiante.nombre || !estudiante.apellido) {
    return res.send("El nombre y apellido del usuario no puede ser vacio");
  }

  var estudianteArray = [
    estudiante.nombre,
    estudiante.apellido,
    estudiante.direccion,
    estudiante.telefono,
    idEstudiante
  ];

  con.query(`UPDATE estudiantes
    SET nombre = ?, apellido = ?, direccion = ?, telefono = ?
    WHERE id_estudiante = ?`, estudianteArray, function(err, result) {
    if (err) throw err;
    if (result.affectedRow == 0) {
      res.send("No se ha modificado ningún usuario");
    }

    res.send("Se ha modificado el usuario: " + idEstudiante);
  });
});

// Eliminar Estudiante
app.delete('/estudiante/:idEstudiante', function(req, res) {
  var idEstudiante = parseInt(req.params.idEstudiante);
  if (isNaN(idEstudiante)) {
    return response.send("Debe ingresar un id de estudiante válido como parámetro.");
  }

  con.query(`DELETE FROM estudiantes WHERE id_estudiante = ?`, [idEstudiante], function(err, result) {
    if (err) throw err;

    res.send("Se ha eliminado el estudiante: " + idEstudiante);
  });
});


//////////////////////////////
///////// materias////////////
//////////////////////////////

// Crear Materia
app.post('/materia', function(req, res) {
  var materia = req.body;
  if (!materia.codigo || !materia.nombre) {
    return res.send("El nombre y código de la materia no puede ser vacio");
  }

  var materiaArray = [
    materia.codigo,
    materia.nombre
  ];

  con.query("INSERT INTO materias (codigo_materia, nombre) VALUES (?, ?) ", materiaArray, function(err, result) {
    if (err) throw err;

    res.send("Se ha creado la materia: " + result.insertId);
  });
});

// Eliminar Materia
app.delete('/materia/:idMateria', function(req, res) {
  var idMateria = parseInt(req.params.idMateria);
  if (isNaN(idMateria)) {
    return response.send("Debe ingresar un id de materia válido como parámetro.");
  }

  con.query(`DELETE FROM notas WHERE id_materia = ?`, [idMateria], function(err, result) {
    if (err) throw err;

    con.query(`DELETE FROM materias WHERE id_materia = ?`, [idMateria], function(err, result) {
      if (err) throw err;

      res.send("Se ha eliminado la materia: " + idMateria);
    });
  });

});

// Reporte Notas de una Materia
app.get('/materia/:idMateria/notas', function(req, res) {
  var idMateria = parseInt(req.params.idMateria);
  if (isNaN(idMateria)) {
    return response.send("Debe ingresar un id de materia válido como parámetro.");
  }

  con.query(`SELECT e.id_estudiante, e.nombre, e.apellido, n.nota
    FROM notas n
    JOIN estudiantes e ON e.id_estudiante = n.id_estudiante
    WHERE n.id_materia = ?`, [idMateria], function(err, result) {
    if (err) throw err;

    res.send(result);
  });
});

// Reporte Notas de un Estudiante
app.get('/estudiante/:idEstudiante/notas', function(req, res) {
  var idEstudiante = parseInt(req.params.idEstudiante);
  if (isNaN(idEstudiante)) {
    return response.send("Debe ingresar un id de estudiante válido como parámetro.");
  }

  con.query(`SELECT e.id_estudiante, e.nombre, e.apellido, n.nota
    FROM notas n
    JOIN estudiantes e ON e.id_estudiante = n.id_estudiante
    WHERE n.id_estudiante = ?`, [idEstudiante], function(err, result) {
    if (err) throw err;

    res.send(result);
  });
});

//////////////////////////////
/////////// notas ////////////
//////////////////////////////

// Crear notas
app.post('/nota', function(req, res) {
  var nota = req.body;
  if (!nota.idEstudiante || !nota.idMateria || !nota.nota) {
    return res.send("El nombre y código de la materia no puede ser vacio");
  }

  if (nota.tipoExamen != "Parcial" && nota.tipoExamen != "Final" && nota.tipoExamen != "Recuperatorio") {
    return res.send("El parámetro tipoExamen solo puede ser uno de 'Parcial', 'Final' o 'Recuperatorio'");
  }

  var notaArray = [
    nota.idEstudiante,
    nota.idMateria,
    nota.tipoExamen,
    nota.nota,
  ];

  con.query("INSERT INTO notas (id_estudiante, id_materia, tipo_examen, nota) VALUES (?, ?, ?, ?) ", notaArray, function(err, result) {
    if (err) throw err;

    res.send("Se ha creado la nota: " + result.insertId);
  });
});
