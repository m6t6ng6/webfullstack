
/**
 * If-else
 */
var edadFacundo = 18;
var edadJuana = 25;

if (edadFacundo > edadJuana) {
    console.log("Facundo es mayor que Juana");
} else {
    console.log("Juana tiene la misma edad o es mayor que Facundo");
}

/**
 * If-else-if multiple
 */

if (edadFacundo > edadJuana) {
    console.log("Facundo es mayor que Juana");
} else if (edadJuana > edadFacundo) {
    console.log("Juana es mayor que Facundo");
} else {
    console.log("Juana y Facundo tienen la misma edad");
}

/**
 * Switch
 */

 var dia = "miercoles";

 switch (dia) {
     case 'lunes':
        console.log("Hoy es lunes. A arrancar.");         
         break;
    case 'martes':
        console.log("Hoy es martes. A tomar envion");         
         break;
    case 'miercoles':
        console.log("Hoy es miercoles. Aprendo a programar ;)");         
        break;
     default:
         //sentencia por defecto
         break;
 }