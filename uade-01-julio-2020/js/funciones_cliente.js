$( document ).ready(function() {
});

$(".consulta").click(function(){
    $(this).hide();
    setInterval(mostrarValoresDolar(), 600000);
    setInterval(mostrarValorInmediatamenteAnteriorAlActual(), 30000);
});

function mostrarValorInmediatamenteAnteriorAlActual() {
    $.ajax({
        url: "http://localhost:3000/anterior",
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            var cotizacionAnterior = result[0].cotizacion.toFixed(2);
            console.log(cotizacionAnterior);
            var cotizacionActual = parseFloat($(".cotizacionOficial").text());
            console.log(cotizacionActual);
            var status = 0;
            if (cotizacionAnterior === cotizacionActual) {
                status = 0;
            } else if (cotizacionAnterior > cotizacionActual) {
                status = -1;
            } else if (cotizacionAnterior < cotizacionActual) {
                status = 1;
            }
            setTimeout(function(){
                if (status === 1) { // tiene que estar verde porque subio
                    $(".cotizacionOficial").removeClass('btn-secondary').removeClass('btn-info').removeClass('btn-danger').addClass('btn-success');
                    $(".cotizacionOficial").text(cotizacionActual + "     " + (cotizacionActual/cotizacionAnterior - 1) + "%");
                } else if (status === -1) { // tiene que estar rojo porque bajo
                    $(".cotizacionOficial").removeClass('btn-secondary').removeClass('btn-info').removeClass('btn-success').addClass('btn-danger');
                    $(".cotizacionOficial").text(cotizacionActual + "     " + (cotizacionActual/cotizacionAnterior - 1) + "%"); 
                } else if (status === 0) { // tiene que estar azul porque se mantuvo
                    $(".cotizacionOficial").removeClass('btn-secondary').removeClass('btn-success').removeClass('btn-danger').addClass('btn-info');
                    $(".cotizacionOficial").text(cotizacionActual + "     " + (cotizacionActual/cotizacionAnterior - 1) + "%");  
                }
                $(".fechaCotizacion").removeClass('btn-secondary').addClass('btn-dark');
            }, 3000);
        },
        error: function() {
            console.log("An error has occured");
        }
    });
}

function mostrarValoresDolar() {
    $.ajax({
        url: "http://localhost:3000/vivo",
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            /* status = 0 -> sin cambios respecto a la medicion anterior
            *  status = 1 -> subio respecto a la medicion anterior
            *  status = -1 -> bajo respecto a la medicion anterior
            */
            var listadoCotizaciones = {
                "oficial": 1,
                "solidario": 1.3,
                "agro": 0.7,
                "blue": 1.8,
                "ccl": 1.55
            };
            var status = 0;
            var cotizacion = result[0].cotizacion;
            var actualizacion = new Date(result[0].fecha_cotizacion);   // chupa la hora en UTC del servidor
            var actualizacion = actualizacion.setHours(actualizacion.getHours() - actualizacion.getTimezoneOffset()/60);  // le resta el offset
            var actualizacion = new Date(actualizacion).toISOString().slice(0, 19).replace('T', ' ');  // muestra hora local del cliente
            $(".cotizacionOficial").text(cotizacion.toFixed(2));
            $(".cotizacionSolidario").text((cotizacion * listadoCotizaciones.solidario).toFixed(2));
            $(".cotizacionAgro").text((cotizacion * listadoCotizaciones.agro).toFixed(2));
            $(".cotizacionBlue").text((cotizacion * listadoCotizaciones.blue).toFixed(2));
            $(".cotizacionCcl").text((cotizacion * listadoCotizaciones.ccl).toFixed(2));       
            $(".fechaCotizacion").text("Actualizado: " + actualizacion);
            $(".leyendaOficial").text("Oficial ARS/USD Compra");
            $(".leyendaSolidario").text("Solidario ARS/USD Compra");
            $(".leyendaAgro").text("Agro ARS/USD Compra");
            $(".leyendaBlue").text("Blue ARS/USD Compra");
            $(".leyendaCcl").text("CCL ARS/USD Compra");
            if (status === 1) { // tiene que estar verde porque subio
                $(".cotizacion").removeClass('btn-info').removeClass('btn-danger').removeClass('hidden').addClass('btn-secondary');
            } else if (status === -1) { // tiene que estar rojo porque bajo
                $(".cotizacion").removeClass('btn-info').removeClass('btn-success').removeClass('hidden').addClass('btn-secondary'); 
            } else if (status === 0) { // tiene que estar azul porque se mantuvo
                $(".cotizacion").removeClass('btn-success').removeClass('btn-danger').removeClass('btn-info').removeClass('hidden').addClass('btn-secondary');
            }
            $(".fechaCotizacion").removeClass('hidden').removeClass('btn-dark').addClass('btn-secondary');
            $(".leyenda").addClass('btn-secondary').removeClass('btn-info').removeClass('btn-danger').removeClass('hidden');
            document.title = "Actualizado: " + actualizacion;
            setTimeout(function(){
                if (status === 1) { // tiene que estar verde porque subio
                    $(".cotizacion").removeClass('btn-secondary').addClass('btn-success');
                } else if (status === -1) { // tiene que estar rojo porque bajo
                    $(".cotizacion").removeClass('btn-secondary').addClass('btn-danger'); 
                } else if (status === 0) { // tiene que estar azul porque se mantuvo
                    $(".cotizacion").removeClass('btn-secondary').addClass('btn-info');
                }
                $(".fechaCotizacion").removeClass('btn-secondary').addClass('btn-dark');
            }, 3000);
        }, 
        error: function() {
            console.log("An error has occured");
        }
    });
};