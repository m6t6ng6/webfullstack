const db = require('mysql');

config = {
    host: "raspy",
    user: "root",
    password: "peperina",
    port: 3306
}

module.exports.conectar_a_mysql = () => {
    con = db.createConnection(config);
    con.connect(err => {
        if (err) throw err;
        console.log("Conectado a la base de datos " + config.host + ".");
    });
};

module.exports.desconectar_db = () => {
    con.end(err => {
        if (err) {
            return console.log("Error al cerrar la conexión hacia la base de datos." + err.message);
        }
        console.log("Conexión a la base de datos cerrada.");
    });
};

function listar_bases_de_datos_callback (err, resultado) {
    var lista = [];
    if (err) return console.log(err);
    if (resultado.length) {
        var lista = rawDataPacket_a_array(resultado, "Database");
        console.log(lista);
        return lista;
    }
}

module.exports.listar_bases_de_datos = () => con.query("SHOW DATABASES", listar_bases_de_datos_callback);

module.exports.conectar_a_base_de_datos = (nombre_de_base_de_datos) => {
    con.changeUser({database: nombre_de_base_de_datos}, err => {
        if (err) throw err;
        console.log("Cambio a base de datos: '" + nombre_de_base_de_datos + "'.") 
    });
    return nombre_de_base_de_datos;
}

function rawDataPacket_a_array (resultado, nombre_de_campo) {
    array_de_elementos = [];
    //console.log(resultado);
    for ( var indice in resultado ) {
        array_de_elementos.push(resultado[indice][nombre_de_campo]);
        //console.log(JSON.parse(JSON.stringify(resultado[indice][nombre_de_campo])));
    };
    return array_de_elementos;
}

function listar_tablas_callback (err, resultado) {
    var lista = [];
    if (err) return console.log(err);
    if (resultado.length) {
        var lista = rawDataPacket_a_array(resultado, "table_name");
        console.log(lista);
        return lista;
    }
}

module.exports.listar_tablas = (nombre_de_la_base_de_datos) => con.query("SELECT table_name FROM information_schema.tables WHERE table_schema = '" + nombre_de_la_base_de_datos + "'", listar_tablas_callback);

module.exports.select_a_base_de_datos = (array_de_campos, nombre_de_tabla, filtro) => {
    //if (err) throw err;
    if (!filtro) {
        con.query("SELECT " + array_de_campos.join() + " FROM " + nombre_de_tabla, (err, resultado) => console.log(resultado));
    } else {
        con.query("SELECT " + array_de_campos.join() + " FROM " + nombre_de_tabla + " WHERE " + filtro, (err, resultado) => console.log(resultado));
    }
}

module.exports.insert_a_base_de_datos = (nombre_de_tabla, array_de_campos, array_de_valores) => {
    console.log(array_de_valores.join("', '"));
    con.query("INSERT INTO " + nombre_de_tabla + " (" + array_de_campos.join() + ") VALUES ('" + array_de_valores.join("', '") + "')", (err, resultado) => {
        if (err) throw err;
        console.log(resultado);
    });
}