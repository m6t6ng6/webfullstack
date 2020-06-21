const config_db = require('./config_db.js');

config_db.conectar_a_mysql();
config_db.listar_bases_de_datos();
var nombre_db = config_db.conectar_a_base_de_datos("ecommerce");
var nombre_db = config_db.conectar_a_base_de_datos("farmaceutica");
var nombre_db = config_db.conectar_a_base_de_datos("concesionaria");
let lista_tablas = config_db.listar_tablas(nombre_db);
//console.log(lista_tablas);
config_db.desconectar_db();
