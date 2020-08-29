//const config_db  = require('./config_db');
const express = require('express');
//const bodyParser = require('body-parser');


const cors = require('cors');
//const { join } = require('path');
//const { config } = require('process');

const app = express();
const host = "localhost";    // URL de la APP
const port = 8000;   // PUERTO de la APP
//app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));    // hace publica la carpeta del backend donde se guardan las fotos
                                                   // ejemplo de acceso desde el navegador: http://localhost:8000/uploads/2020-08-29T18:58:17.243Z_pelota.jpg
app.options('*', cors());
app.use(cors());

// https://www.youtube.com/watch?v=srPXMt1Q0nY
// inicializacion de multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');    // ATENCION: SIEMPRE CREAR LA CARPETA ANTES MANUALMENTE EN EL SERVIDOR !!! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !!!
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + "_" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // acepto un archivo
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') cb(null, true);
    // rechazo un archivo
    else cb(null, false);
}
const upload = multer({ 
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5    // limite de 5 megas
    },
    fileFilter: fileFilter
    });   // carpeta donde se guarda en el backend las fotos (no es publica, hay que hacerla accesible estaticamente)

app.post("/productos", upload.single('productImage'), (req, res) => {    // se pueden poner tantos "handlers como se quieran, siempre" y van a ser procesados serialmente de izquierda a derecha siempre, upload.single() parsea un unico archivo
    console.log(req.file);
    const producto = { 
        "nombre": req.body.nombre,
        "precio": req.body.precio,
        "productImage": req.file.path  // guardo el nombre del archivo en la base de datos
    };
    console.log(producto);
    res.send(producto);
});

// ESCUCHA DE IP Y PUERTO
app.listen(port, (err, result) => {
    if (err) throw err;
    console.log('App escuchando en http://' + host + ':' + port);
});