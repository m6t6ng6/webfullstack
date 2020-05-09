$(document).ready(function(){
    console.log("Ready");
    $('.timerBotonStop').hide();
    var i;
    for( i=0; i < 60; i++ ) {
        if ( i < 10 ) {
            $('.seconds-optgroup').append('<option>' + "0" + i + '</option>');
            $('.minutes-optgroup').append('<option>' + "0" + i + '</option>');
        } else if ( i >= 10 ) {
            $('.seconds-optgroup').append('<option>' + i + '</option>')
            $('.minutes-optgroup').append('<option>' + i + '</option>');
        }
    }
});


minNuevoValor = "00";
segNuevoValor = "00";

$('.timerBotonReset').on('click', function() {
    console.log("Boton reset cliqueado");
    $('.timerBotonStart').show();
    $('.timerBotonStop').hide(); 
    $('#listaSegundos').prop('disabled', false);
    $('#listaMinutos').prop('disabled', false);
    $('#minutos').text(minNuevoValor);
    $('#segundos').text(segNuevoValor);
    clearInterval(intervalo);
    $('#alerta').text("");
    $('.timerDisplay').removeClass("timerCumplido"); 
    console.log("Se reinicio el contador del siguiente modo: " + minNuevoValor + ":" + segNuevoValor + ".00");
});

$('.timerBotonStop').on('click', function() {
    console.log("Boton stop cliqueado");
    clearInterval(intervalo);
    $(this).hide();
    $('.timerBotonStart').show();
    console.log("Se detuvo el timer en: " + $('#minutos').text() + ":" + $('#segundos').text() + ".00");
});

$('.timerBotonStart').on('click', function() {
    segundero = parseInt( $('#minutos').text(), 10 );
    minutero = parseInt( $('#segundos').text(), 10 );
    if ( segundero == 0 && minutero == 0 ) {
        $('#alerta').addClass("timerError").removeClass("timerCumplido").text("El timer no es válido.");
        $('#listaSegundos').addClass("error");
        $('#listaMinutos').addClass("error");
    } else {
        $('#listaSegundos').removeClass("error");
        $('#listaMinutos').removeClass("error");
        $(this).hide();
        $('.timerBotonStop').show();
        $('#listaSegundos').prop('disabled', true);
        $('#listaMinutos').prop('disabled', true);
        $('.timerDisplay').removeClass("timerCumplido");
        $('#alerta').removeClass("timerError").addClass("timerCumplido").text("");
        console.log("Boton start cliqueado");
        intervalo = setInterval(function(){
            segundero = parseInt( $('#segundos').text(), 10 );
            minutero = parseInt( $('#minutos').text(), 10 );
            if ( minutero > 0 && segundero == 0 ) {
                console.log("El segundero es cero");
                if ( minutero > 10 ) {
                    minutero--;
                    $('#minutos').text(minutero);
                    $('#segundos').text("59");
                } else if ( minutero <= 10 ) {
                    minutero--;
                    minutero = "0" + minutero.toString();
                    $('#minutos').text(minutero);
                    $('#segundos').text("59");
                }
                console.log("El minutero ahora es " + minutero);
            } else if ( segundero > 0 ) {
                if ( segundero > 10 ) {
                    segundero--;
                    $('#segundos').text(segundero.toString());
                } else if ( segundero <= 10 ) {
                    segundero--;
                    segundero = "0" + segundero.toString();
                    $('#segundos').text(segundero);
                }
                console.log("El segundero ahora marca: " + segundero);
            } else if ( minutero == 0 && segundero == 0 ) {
                $('#segundos').text("00");
                $('#minutos').text("00");
                console.log("TIMER ALCANZADO!");
                $('.timerDisplay').addClass("timerCumplido");
                clearInterval(intervalo);
                $('#alerta').text("Timer alcanzado!");
                $(".timerBotonStop").hide();
            }
        }, 1000);
    }
});

$('#listaSegundos').on('click', function() {
    console.log("Lista segundos cliqueada");
});

$('#listaMinutos').on('click', function() {
    console.log("Lista minutos cliqueada");
});

$('#listaMinutos').on('change', function() {
    minNuevoValor = $(this).val();
    minValorElegido = minNuevoValor;
    console.log("Se eligio la opcion: " + minNuevoValor + " minutos.");
    $('#minutos').text(minNuevoValor);
});

$('#listaSegundos').on('change', function() {
    segNuevoValor = $(this).val();
    console.log("Se eligio la opcion: " + segNuevoValor + " segundos.");
    $('#segundos').text(segNuevoValor);
});