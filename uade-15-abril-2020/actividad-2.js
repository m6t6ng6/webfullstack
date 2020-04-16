/** 
 * 
 * Juan es hincha de River y Tomas de Boca.
 * En los ultimos 3 partidos, River convirtio 3, 2 y 4 goles, mientras que 
 * Boca marco 1, 5 y 2 tantos. 
 * 
 * 1. Calcular el promedio de gol por partido de cada equipo
 * 2. Decidir cual de los dos equipos tiene mayor promedio de gol por partido
 * 
 */

 var promedioGolesRiver = (3+2+4)/3;
 var promedioGolesBoca = (1+5+2)/3;

if (promedioGolesRiver > promedioGolesBoca) {
    var resultado = "River tiene mas goles que Boca!";
} else if (promedioGolesRiver < promedioGolesBoca) {
    var resultado = "Boca tiene mas goles que River!";
} else {
    var resultado = "Boca y River tienen el mismo promedio de goles por partido!";
}

console.log(resultado + ", promedio de goles de Boca: " + promedioGolesBoca + ", promedio de goles de River: " + promedioGolesRiver);