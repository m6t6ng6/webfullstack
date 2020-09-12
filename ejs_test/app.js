const express = require('express');
const path = require('path');

const app = express();
const url = "localhost";
const port = 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { nombre: 'Fernando' });
});

app.get('/:name', (req, res) => {
    res.render('index_param', { name: req.params.name });
});

app.listen(port, () => {
    console.log('Aplicación corriendo en: http://' + url + ':' + port);
});