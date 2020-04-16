/**
 * 
 * Juan y Tomas quieren comparar su IMC (indice de masa corporal)
 * 
 * IMC= masa / altura^2 = masa / (altura * altura)
 * 
 * Procedimiento 
 * 1. Almacenar en variables la altura y peso de cada uno
 * 2. Calcular el IMC de cada uno
 * 3. Crear una variable booleana que almacene si Juan tiene IMC mayor que Tomas
 * 4. Imprimir un mensaje en la consola con el resultado de la operacion del paso 3. 
 *    (A modo de ejemplo. "El IMC de Juan es mayor al de Tomas? false")
 */

var masaJuan = 74;
var alturaJuan = 1.74;
var masaTomas = 120;
var alturaTomas = 1.89;

var imcJuan = masaJuan / (alturaJuan * alturaJuan);
var imcTomas = masaTomas / (alturaTomas * alturaTomas);

console.log("masa de Juan: " + masaJuan + ", altura de Juan: " + alturaJuan + ", indice de masa corporal de Juan: " + imcJuan);
console.log("masa de Tomas: " + masaTomas + ", altura de Tomas: " + alturaTomas + ", indice de masa corporal de Tomas: " + imcTomas);

var resultado = imcJuan > imcTomas;

console.log("El IMC de Juan es mayor al de Tomas? " + resultado);