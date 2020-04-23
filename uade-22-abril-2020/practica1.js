var personas = [
    { nombre: "Juan", edad: 25, pais: "Argentina", autos: ["Chevrolet Onix", "VW 1500"], salario: 25000 },
    { nombre: "Jose", edad: 32, pais: "Argentina", autos: ["VW Gol power"], salario: 33000 },
    { nombre: "Pedro", edad: 30, pais: "Argentina", autos: [], salario: null },
    { nombre: "Ignacio", edad: 19, pais: "Argentina", autos: ["Suzuki fan"], salario: 35900 },
    { nombre: "Roberto", edad: 54, pais: "Argentina", autos: ["207 GTI", "VW Crossfox"], salario: 150000 }
];

var personaMenor = null;

for (var persona of personas) {
    if (personaMenor == null || persona.edad < personaMenor.edad) {
        personaMenor = persona;
    }
};

var personaString = JSON.stringify(personaMenor);

//document.write(personaMenor);
console.log(personaMenor);