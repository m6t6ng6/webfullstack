// "CLASE" PERSONA
// CONSTRUCTOR
var Persona = function (nombre, anyoNac) {
    this.nombre = nombre;
    this.anyoNac = anyoNac;
}
Persona.diferenciaAnyos = function (persona1, persona2) {
    return "La diferencia de edad entre " + persona1.nombre + " (" + persona1.anyoNac + ") y " + persona2.nombre + " (" + persona2.anyoNac + ") es de " + (persona1.anyoNac - persona2.anyoNac) + " años.";
}
Persona.prototype.saludar = function () {
    return "Hola soy " + this.nombre;
}





// "CLASE" DIRECTIVO "EXTIENDE" PERSONA
// CONSTRUCTOR
var Directivo = function (nombre, colegio) {
    Persona.call(this, nombre, 1900);
    this.colegio = colegio; 
}
Directivo.prototype = Object.create(Persona.prototype);
Directivo.prototype.despedirse = function () {
    return "Bye, lo saluda el directivo " + this.nombre + " del colegio " + this.colegio;
}




// USO DE MIS OBJETOS
var leo = new Persona("Leo", 1990);
var tizi = new Persona("Tiziano", 2010);

var directorJuan = new Directivo("Juan", "ISFT151");
var directoraMaria = new Directivo("Maria", "ETU5");