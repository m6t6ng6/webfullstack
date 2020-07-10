const express = require('express');

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World!');
    var ip_cliente = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.ip;
    console.log("CONNECTED: " + ip_cliente);
});

app.get('/productos', function(req, res) {
    productos = ['lapicera', 'goma', 'tijera', 'resma A4'];
    res.send(productos);
});

app.listen(port, function(err, result) {
    if (err) throw err;
    console.log('App escuchando en http://localhost:' + port);
});