// item 1
$(document).ready(function(){
    //$("body").addClass('destacado');
});

// item 2
// $("h1").removeClass('destacado2');

// item 3
// var valor = $("input").val();
// console.log(valor);

$(".formError").show();
$("#nombre_ayuda").hide();
$("#apellido_ayuda").hide();
$("#email_ayuda").hide();
var email_ok = false;
var nombre_ok = false;
var apellido_ok = false;
$nombre = $("input[name='nombre']");
$apellido = $("input[name='apellido']");
$email = $("input[name='mail']");
$boton = $("input[name='boton']");

$email.on('change', function(e){
    var contenido = $(this).val();
    var tieneArroba = contenido.includes("@");
    var tienePunto = contenido.includes(".");
    var largo = contenido.length;

    if (largo >= 1 && largo <=30 && tieneArroba && tienePunto){
        email_ok = true;
        console.log("input email: " + contenido + ", de largo: " + largo + ", es un correo valido; email_ok = " + email_ok);
        $("#email_ayuda").hide();
        $(this).addClass('valid');
        $(this).removeClass('notValid');
    } else {
        email_ok = false;
        console.log("input email: " + contenido + ", de largo: " + largo + ", no es un correo valido; email_ok = " + email_ok);
        $("#email_ayuda").show();
        $(this).addClass('notValid');
        $(this).removeClass('valid');
    }
});

$nombre.on('change', function(e){
    var contenido = $(this).val();
    var largo = contenido.length;

    if (largo >= 1 && largo <= 30){
        nombre_ok = true;
        console.log("input nombre: " + contenido + ", de largo: " + largo + ", es un nombre valido; nombre_ok = " + nombre_ok);
        $("#nombre_ayuda").hide();
        $(this).addClass('valid');
        $(this).removeClass('notValid');
    } else {
        nombre_ok = false;
        console.log("input nombre: " + contenido + ", de largo: " + largo + ", no es un nombre valido; nombre_ok = " + nombre_ok);
        $("#nombre_ayuda").show();
        $(this).addClass('notValid');
        $(this).removeClass('valid');
    } 
});

$apellido.on('change', function(e){
    var contenido = $(this).val();
    var largo = contenido.length;

    if (largo >= 1 && largo <= 50){
        apellido_ok = true;
        console.log("input apellido: " + contenido + ", de largo: " + largo + ", es un apellido valido; apellido_ok = " + apellido_ok);
        $("#apellido_ayuda").hide();
        $(this).addClass('valid');
        $(this).removeClass('notValid');
    } else {
        apellido_ok = false;
        console.log("input apellido: " + contenido + ", de largo: " + largo + ", no es un apellido valido; apellido_ok = " + apellido_ok);
        $("#apellido_ayuda").show();
        $(this).addClass('notValid');
        $(this).removeClass('valid');
    } 
});

