$( document ).ready(function() {
});

intervalo = setInterval( reloj, 1000);

function reloj() {

var fecha = Date(Date.now());
var arrayFecha = fecha.split(" ");
// arrayFecha: [Sat,May,09,2020,16:04:21,GMT-0300,(Argentina,Standard,Time)]

/////////////////// determinacion del nombre del dia
switch(arrayFecha[0]){
    case "Mon":
        nombreDia="Lunes ";
        break;
    case "Tue":
        nombreDia="Martes ";
        break;
    case "Wed":
        nombreDia="Miercoles ";
        break;
    case "Thu":
        nombreDia="Jueves ";
        break;
    case "Fri":
        nombreDia="Viernes ";
        break;
    case "Sat":
        nombreDia="Sabado ";
        break;
    case "Sun":
        nombreDia="Domingo ";
        break;
}

////////////////// determinacion del numero del dia
//console.log(typeof arrayFecha[2]); // === string
numeroDia = arrayFecha[2].replace(/^0+/, '');

////////////////// determinacion del nombre del mes
switch(arrayFecha[1]){
    case "Jan":
        nombreMes="Enero ";
        break;
    case "Feb":
        nombreMes="Febrero ";
        break;
    case "Mar":
        nombreMes="Marzo ";
        break;
    case "Apr":
        nombreMes="Abril ";
        break;
    case "May":
        nombreMes="Mayo ";
        break;
    case "Jun":
        nombreMes="Junio ";
        break;
    case "Jul":
        nombreMes="Julio ";
        break;
    case "Aug":
        nombreMes="Agosto ";
        break;
    case "Sep":
        nombreMes="Septiembre ";
        break;
    case "Oct":
        nombreMes="Octubre ";
        break;
    case "Nov":
        nombreMes="Noviembre ";
        break;
    case "Dec":
        nombreMes="Diciembre ";
        break;
}

////////////////// determinacion del year
year = arrayFecha[3];

////////////////// conformacion de la fecha completa
fechaCompleta = nombreDia + numeroDia + " de " + nombreMes + "del " + year;
$('.panel-fecha').text(fechaCompleta);


/////////////////////////////////////////////////////////////////////////////////

////////////////// desgloce de la hora completa
arrayHora = arrayFecha[4].split(':');
// console.log(arrayHora);  ==== ["16", "46", "21"]

////////////////// determinacion de horario y flag de mediodia
if ( parseInt(arrayHora[0], 10) <= 12 ) {
    $('.horareo').text(arrayHora[0]);
    $('.flag-mediodia').text("AM");
} else if ( parseInt(arrayHora[0], 10) > 12 ) {
    luegoDeLas12 = ( parseInt(arrayHora[0], 10) - 12).toString();
    if ( parseInt(luegoDeLas12, 10) < 10) {
        $('.horareo').text("0" + luegoDeLas12);
        $('.flag-mediodia').text("PM");
    } else if ( parseInt(luegoDeLas12, 10) >= 10) {
        $('.horareo').text(luegoDeLas12);
        $('.flag-mediodia').text("PM");
    }
}

/////////////////// determinacion de minutos
$('.minutero').text(arrayHora[1]);

/////////////////// determinacion de segundos
$('.segundero').text(arrayHora[2]);

/////////////////// determinacion de referencia
$('.referencia').text(arrayFecha[5] + " " + arrayFecha[6] + " " + arrayFecha[7] + " " + arrayFecha[8]);

}