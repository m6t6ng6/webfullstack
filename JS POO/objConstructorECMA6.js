// "CLASE" PERSONA
// CONSTRUCTOR
class Persona {
  constructor(nombre, anyoNac) {
    this.nombre = nombre;
    this.anyoNac = anyoNac;
  }
  saludar() {
    return "Hola soy " + this.nombre; 
  }
  static diferenciaAnyos (persona1, persona2) {
    return "La diferencia de edad entre " + persona1.nombre + " (" + persona1.anyoNac + ") y " + persona2.nombre + " (" + persona2.anyoNac + ") es de " + (persona1.anyoNac - persona2.anyoNac) + " años.";
  }
}

// "CLASE" DIRECTIVO "EXTIENDE" PERSONA
// CONSTRUCTOR
class Directivo extends Persona {
  constructor(nombre, colegio) {  
    super(nombre, 1900);
    this.colegio = colegio; 
  }
  despedirse () {
    return "Bye, lo saluda el directivo " + this.nombre + " del colegio " + this.colegio;
  }
}

// USO DE MIS OBJETOS
var leo = new Persona("Leo", 1990);
var tizi = new Persona("Tiziano", 2010);

var directorJuan = new Directivo("Juan", "ISFT151");
var directoraMaria = new Directivo("Maria", "ETU5");