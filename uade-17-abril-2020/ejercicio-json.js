/* ESCRIBIR UN OBJETO JSON QUE CONTENGA DATOS SOBRE VOS 
- NOMBRE, APELLIDO, EDAD
- ARRAY DE AUTOS (VALE INVENTAR)
- RESIDENCIA COMO OBJETO DE CIUDAD, PROVINCIA, PAIS
- FECHA DE NACIMIENTO COMO STRING
- LUGAR DE NACIMIENTO COMO OBJETO DE CIUDAD, PROVINCIA, PAIS Y FECHA

IMPRIMIR OPR CONSOLA EL OBJETO
TRANSFORMARLO A STRING (JSON.STRINGIFY) E IMPRIMIRLO POR CONSOLA NUEVAMENTE*/

var misDatos = {
    nombre: "Fernando",
    apellido: "Bustamante",
    edad: 35,
    autos: [
        "Rolls-Royce Sweptail",
        "Maybach Exelero",
        "Koenigsegg CCXR Trevita",
        "Lamborghini Veneno",
        "W Motors Lykan Hypersport",
        "Zenvo TS 1"
    ],
    residencia: {
        ciudad: "Avellaneda",
        provincia: "Buenos Aires",
        pais: "Argentina"
    },
    fechaDeNacimiento: "29-SEP-1984",
    lugarDeNacimiento: {
        ciudad: "CABA",
        provincia: "Buenos Aires",
        pais: "Argentina",
        fecha: "Sabado 29-SEP-1984 19:00"
    }
}

console.log(misDatos)
console.log(JSON.stringify(misDatos))
