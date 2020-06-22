/**
 * Ejemplo 1
 Se prepara una promesa con su metodo resolve y su metodo reject
 */

const { resolve } = require("bluebird");

let promiseToCleanTheRoom = new Promise((resolve, reject) => {
    let isClean = false;
    if(isClean){
        resolve('clean');
    } else {
        reject('not clean');
    }
});

promiseToCleanTheRoom
    .then(fromResolve => console.log("The room is " + fromResolve))
    .catch(fromReject => console.log("The room is " + fromReject));

/** 
Ejemplo 2
Se instancian tres promesas
*/

let cleanRoom = function() {
    return new Promise((resolve, reject) => resolve("Room is cleaned. "));
}

let removeGarbage = function(message) {
    return new Promise((resolve, reject) => resolve(message + "Garbage removed. "));
}

let winIcecream = function(message) {
    return new Promise((resolve, reject) => resolve(message + "Icecream won! "));
}

cleanRoom()  // primero se ejecuta esto
    .then((result) => removeGarbage(result))  // segundo ocurre esto
    .then((result) => winIcecream(result))    // tercero ocurre esto
    .then((result) => console.log(result + "Complete."));  // finaliza con esto

/**
Ejemplo 3
Inician las tres tareas en paralelo simultaneamente y cuando se terminan TODAS, envia el string del console log
*/

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then( result => console.log('All done in parallel and all finished.'));

/**
Ejemplo 4
Inician las tres tareas en paralelo simultaneamente y cuando se termina UNA, envia el string del console log
Aplicacion:
    - servidores en un pool con la misma info (por propositos de redundancia)
    - todos los servidores escucha, capturan el mismo pedido
    - el primero que resolvio la tarea ya es suficiente para desechar el resto del proceso en los otros porque es la misma informacion
*/

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then( result => console.log('All initiated in parallel and one just finished.'));