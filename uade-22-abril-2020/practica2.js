// Crear funcion que encuentre el auto mas rapido //

var autos1 = [
    { marca: "Volkswagen", modelo: "Gol", velocidadMax: 180 },
    { marca: "BMW", modelo: "M3", velocdadMax: 225 },
    { marca: "Porche", modelo: "911", velocidadMax: 240 }
]

var autos2 = [
    { marca: "Ferrari", modelo: "Gol", velocidadMax: 180 },
    { marca: "McLaren", modelo: "M3", velocdadMax: 225 },
    { marca: "Ford", modelo: "911", velocidadMax: 240 }
]

function autoMasRapido(listaDeAutos) {
    var autoRapido = null;

    for(var auto of listaDeAutos) {
        if (autoRapido == null || auto.velocidadMax > autoRapido.velocidadMax) {
            autoRapido = auto;
        } 
    }
};

var autoRapido = autoMasRapido(autos1);
console.log(autoRapido);
var autoRapido = autoMasRapido(autos2);
console.log(autoRapido);