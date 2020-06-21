const elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

const persons = [
    {firstname: "Malcom", lastname: "Reynolds"},
    {firstname: "Kaylee", lastname: "Frye"},
    {firstname: "Jayne", lastname: "Cobb"}
];

/**
callbackfn clasico
array.map() method explanation: https://www.w3schools.com/jsref/jsref_map.asp#:~:text=The%20map()%20method%20creates,for%20array%20elements%20without%20values.
*/
elements.map(function(element){
    console.log(element.length);
});
/**
output:
8
6
7
9
*/ 

persons.map(function(person){
    var fullname = [person.firstname, person.lastname].join(" ");
    console.log(fullname);
});
/**
output:
Malcom Reynolds
Kaylee Frye
Jayne Cobb
*/

/**
arrow operator
(1) no se coloca la palabra function
(2) cuando el argumento es uno solo se pueden quitar los parentesis
(3) lo que esta en la izquierda es el input, lo que esta a la derecha es el output
(4) cuando la funcion tiene una unica linea con return, se puede obviar la palabra return
arrow operator explanation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
elements.map(element => console.log(element.length));
/**
output:
8
6
7
9
*/

persons.map(person => {
    var fullname = [person.firstname, person.lastname].join(" ");
    console.log(fullname);
});
/**
output:
Malcom Reynolds
Kaylee Frye
Jayne Cobb
 */